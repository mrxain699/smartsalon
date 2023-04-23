import React, {useEffect, useContext, useState} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS as colors , REQUEST_URL} from '../../../constants/GlobalConstants';
import { AuthContext } from '../../Auth/AuthContent';
import { GetChats } from '../../../api/SalonRequests';
import { title } from '../../../util/Functions';
import Loader from '../../../UI/Loader';
import CustomIcon from '../../../UI/Icon';
const MessageItem = ({navigation, item}) => {
    return (
        <TouchableOpacity style={styles.msgBox} onPress={() => navigation.navigate('ChatScreen', {salon:item})} key={item.id * item.id}>
            <View style={styles.userMessageCon}>
                <View style={styles.avatar}>
                    <Image source={{uri:REQUEST_URL + item.salon_image}} style={styles.avatarImage} />
                </View>
                <View style={styles.messageInfo}>
                    <Text style={styles.salonName}>{item.salon_name && title(item.salon_name)}</Text>
                    <Text style={styles.lastMessage}>
                    {
                        item.last_msg
                        
                    }
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const Messages = ({ navigation }) => {
    const { loggedInUserId } = useContext(AuthContext);
    const [chatHeads, setChatHeads] = useState([]);
    const [error, setError]  = useState('');
    useEffect(() => {
        const get_chat_heads = async () => {
            try {
                const response = await GetChats("chat", "chats", loggedInUserId);
                if(Array.isArray(response)){
                    
                    setChatHeads(response);
                }
                else{
                    setError('No Chat Exist');
                    
                }
            } catch (error) {
                console.log(error)
            }
        }
        get_chat_heads();
        const interval = setInterval(() => {
            get_chat_heads();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    
    return (
        <View style={styles.container}>
            <ScrollView style={{ flexGrow: 1 }}>
            {
                chatHeads.length > 0 ? 
                    chatHeads.map((item, i)=>(
                        <MessageItem navigation={navigation} item={item} key={i*i} />
                    )):
                    error != "" ? <View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text style={{color:colors.grey700}}>{error}</Text></View> :
                    <Loader/>
            }
               
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
    },
    msgBox: {
        height: 80,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.grey200,
        marginTop: 10,
    },
    userMessageCon: {
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 10,
        overflow: 'hidden',
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 100,
        overflow: 'hidden',
        marginRight: 10,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    messageInfo: {
        alignSelf: 'flex-start',
        marginVertical: 8,
        flexGrow: 1,
    },
    salonName: {
        fontSize: 18,
        color: '#000',
    },
    lastMessage: {
        fontSize: 14,
        color: colors.grey50,


    }
})
export default Messages;

