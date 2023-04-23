import React, {
    useEffect,
    useState,
    useCallback,
    useContext
} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
} from 'react-native'
import {
    GiftedChat,
    InputToolbar,
    Bubble,
    Send
} from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-crop-picker';
import { COLORS as color, REQUEST_URL } from '../../../../constants/GlobalConstants';
import { title } from '../../../../util/Functions';
import { GetMessages, SendMessage } from '../../../../api/SalonRequests';


const Chat = ({ navigation, salon, customer}) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const get_messages = async () => {
            try {
                const response = await GetMessages("chat", "messages", salon.id, customer.id);
                const formattedMessages = response.map((message) => ({
                    _id: message.id,
                    text: message.message && message.message,
                    createdAt: message.date,
                    user: {
                      _id: message.sender === salon.id ? salon.id : customer.id,
                    },
                    image: message.image && REQUEST_URL + message.image
                  }));
                  setMessages(formattedMessages);
            } catch (error) {
                console.log(error)
            }

        }
        get_messages();
        const interval = setInterval(() => {
            get_messages();
        }, 1000);
        return () => clearInterval(interval);
    }, []);



    const onGallery = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            includeBase64: true,
        })
            .then(image => {
                let image_path = image.path;
                let image_name = image.path.split("/");
                image_name = image_name[image_name.length - 1];
                let image_ext = image_name.split(".");
                image_ext = image_ext[image_ext.length - 1];
                const send_image = {
                    name: image_name,
                    base: image.data,
                    type: image_ext,
                }
                const image_message = [{
                    _id: Math.round(Math.random() * 1000000),
                    text: null,
                    createdAt: new Date(),
                    user: { _id: salon.id },
                    image: image_path,
                }];

                onSend(image_message, send_image);
            })
            .catch(error => {
                console.log(error);
            })
    };


    const onSend = useCallback((messages = [], image = null) => {
        if (messages.length > 0) {
            let new_message = messages[0];
            if (!new_message.hasOwnProperty('image')) {
                const txt_message = {
                    sender: new_message.user._id,
                    receiver: customer.id,
                    message: new_message.text,
                    image: '',
                }
                new_message = txt_message;
            }
            else {
                const image_message = {
                    sender: new_message.user._id,
                    receiver: customer.id,
                    message: new_message.text,
                    image: image,

                }
                new_message = image_message;
            }
            const send_message = async () => {
                try {
                    const response = await SendMessage("chat", "send_barber_message", new_message);
                    console.log(response);
                } catch (error) {
                    console.log(error)
                }
            }
            send_message();
            setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        }

    }, []);

    return (
        <View style={styles.chatContainer}>
            <View style={styles.chatHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../assets/images/arrow-back.png')} />
                </TouchableOpacity>
                <View style={styles.avatar}>
                    <Image source={{ uri: REQUEST_URL + customer.image }} style={styles.avatarImg} resizeMode="cover" />
                </View>
                <Text style={styles.headerTitle}>{customer.name && title(customer.name)}</Text>
            </View>
            <View style={styles.chatBody}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                >
                    <GiftedChat
                        messages={messages}
                        onSend={messages => onSend(messages)}
                        user={{
                            _id: salon.id,
                        }}
                        textInputStyle={styles.customtextInput}
                        renderInputToolbar={props => {
                            return (
                                <InputToolbar
                                    containerStyle={styles.customInputContainer}
                                    {...props}
                                />
                            );
                        }}
                        renderActions={() => {
                            return (
                                <TouchableOpacity
                                    style={{ height: '100%', justifyContent: 'center', alignItems: 'center', marginLeft: 10, }}
                                    onPress={() => { onGallery(); }}>
                                    <Image source={require('../../../../assets/images/image.png')} />
                                </TouchableOpacity>
                            );
                        }}
                        renderBubble={props => {
                            return (
                                <Bubble
                                    {...props}
                                    wrapperStyle={{
                                        right: {
                                            backgroundColor: 'orange'
                                        }
                                    }}
                                />
                            );

                        }}

                        alwaysShowSend
                        isTyping
                    />
                </KeyboardAvoidingView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
    },
    chatHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 70,
        borderBottomWidth: 0.1,
        borderColor: 'rgba(0,0,0,0.6)',
        shadowColor: "rgba(0,0,0,0.6)",
        shadowOffset: {
            width: -2,
            height: -2,
        },
        elevation: 1.5,
    },
    avatar: {
        width: 50,
        height: 50,
        overflow: 'hidden',
        borderRadius: 100,
        marginLeft: 10,

    },
    avatarImg: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    headerTitle: {
        fontSize: 18,
        color: color.black,
        marginLeft: 10,
    },
    chatBody: {
        flexGrow: 1,
    },
    customInputContainer: {
        backgroundColor: '#fafafa',
    },
    customtextInput: {
        borderRadius: 50,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#cdcdcd',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginTop: 3,
        color: color.black,

    }

});

export default Chat

