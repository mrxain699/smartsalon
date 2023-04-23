import React, { useEffect, useContext, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS as colors, REQUEST_URL } from '../../../../constants/GlobalConstants';
import { AuthContext } from '../../../Auth/AuthContent';
import { GetChats } from '../../../../api/Barber/Chat';
import { title } from '../../../../util/Functions';
import { GetSalon } from '../../../../api/Barber/Salon';
import CustomIcon from '../../../../UI/Icon';
import Loader from '../../../../UI/Loader';
const MessageItem = ({ navigation, item, salon }) => {
    return (
        <TouchableOpacity style={styles.msgBox} onPress={() => navigation.navigate('ChatScreen', { customer: item, salon:salon })} key={item.id * item.id}>
            <View style={styles.userMessageCon}>
                <View style={styles.avatar}>
                    <Image source={{ uri: REQUEST_URL + item.customer_image }} style={styles.avatarImage} />
                </View>
                <View style={styles.messageInfo}>
                    <Text style={styles.salonName}>{item.customer_name && title(item.customer_name)}</Text>
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
    const [salon, setSalon] = useState({});
    const [error, setError]  = useState('');

    useEffect(() => {
        const get_salon = async () => {
            try {
                const response = await GetSalon("salon", "get", loggedInUserId);
                if (response != null) {
                    setSalon(response[0]);
                }
            } catch (error) {
                console.log(error);
            }
        }
        get_salon();
    }, []);

    useEffect(() => {
        const get_chat_heads = async () => {
            try {
                const response = await GetChats("chat", "barber_chats", salon.id);
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
    }, [salon]);


    return (
        <View style={styles.container}>
            <ScrollView style={{ flexGrow: 1 }}>
                {
                    chatHeads.length > 0 ?
                        chatHeads.map((item, i) => (
                            <MessageItem navigation={navigation} item={item} salon={salon} key={i * i} />
                        ))
                        :
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
        width: 60,
        height: 60,
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
        marginVertical: 15,
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

