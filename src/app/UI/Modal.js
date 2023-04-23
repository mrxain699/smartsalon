import React from 'react';
import { View, Modal, Pressable, Text, StyleSheet, Image } from 'react-native';
import { COLORS as color, REQUEST_URL } from '../constants/GlobalConstants';
import { styles as css } from '../constants/Style';
import Button from './Button';
import Input from './Input';



const PermissionModal = ({ animationType, transparent, visible, onPress, onCamera, onGallery }) => {

    return (
        <Modal
            animationType={animationType}
            transparent={transparent}
            visible={visible}
            onRequestClose={() => {
                onPress()
            }}
        >
            <View style={css.modal}>
                <View style={styles.modalBox}>
                    <Pressable style={styles.buttons} onPress={() => { onCamera() }}>
                        <Text style={styles.buttonsText}>Open Camera</Text>
                    </Pressable>
                    <View style={styles.divider}></View>
                    <Pressable style={styles.buttons} onPress={() => { onGallery() }}>
                        <Text style={styles.buttonsText}>Select From Gallery</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
};

const AlertModal = ({ animationType, transparent, visible, type, title, message, btn, onPress }) => {
    return (
        <Modal animationType={animationType} transparent={transparent} visible={visible}>
            <View style={css.modal}>
                <View style={css.modalAlertBox}>
                    {
                        type && (
                            <View style={css.modalImageContainer}>
                                <Image style={css.modalImage} source={type === "success" ? require('../assets/images/success-icon.png') : type === "error" ? require('../assets/images/error-icon.png') : require('../assets/images/warning-icon.png')} />
                            </View>
                        )
                    }
                    {title ? <Text style={css.modalAlertTitle}>{title}</Text> : ''}
                    {message && <Text style={css.modalAlertMessage}>{message && message}</Text>}
                    <Button text={btn} style={css.modalAlertBtn} onPress={onPress} />
                </View>
            </View>
        </Modal>

    )
};

const UpdateInputModal = ({ animationType, transparent, visible, identifier, placeholder, value, btn, onPress, inputHandler, onClose, loading, error}) => {
    return (
        <Modal
            animationType={animationType}
            transparent={transparent}
            visible={visible}
            onRequestClose={() => {
                onClose();
            }}
        >
            <View style={css.modal}>
                <View style={css.modalAlertBox}>
                    <Text style={{ fontSize: 18, color: color.grey300, alignSelf: 'flex-start', marginLeft: 10 }}>Update {placeholder}</Text>
                    <Input
                        placeholder={placeholder}
                        onChangeText={inputHandler.bind(this, identifier)}
                        value={value}
                        style={{ marginTop: 10 }}
                    />
                    {error && <Text style={{color:'#ff0004', textAlign:'left'}}>{error}</Text>}
                    <Button text={btn} style={[css.modalAlertBtn, { marginTop: 15 }]} onPress={onPress} loading={loading} />
                </View>
            </View>
        </Modal>

    )
};

const CustomModal = ({ animationType, transparent, visible, image, title, message, btn, onPress }) => {
    return (
        <Modal animationType={animationType} transparent={transparent} visible={visible}>
            <View style={css.modal}>
                <View style={css.modalAlertBox}>
                    <View style={css.modalImageContainer}>
                        <Image source={image} />
                    </View>
                    <Text style={css.modalAlertTitle}>{title}</Text>
                    {message && <Text style={css.modalAlertMessage}>{message && message}</Text>}
                    <Button text={btn} style={css.modalAlertBtn} onPress={onPress} />
                </View>
            </View>
        </Modal>

    )
};

const ImageModal = ({ animationType, transparent, visible, image, onPress }) => {
    return (
        <Modal
            animationType={animationType}
            transparent={transparent}
            visible={visible}
            onRequestClose={() => {
                onPress()
            }}>
            <View style={[css.modal, {paddingHorizontal:0}]}>
                <View style={{ width: '100%', height: '100%', backgroundColor:'#000'}}>
                    <Image source={{uri:REQUEST_URL + image}}  resizeMode="contain"  style={{width:'100%', height:'100%'}}/>
                </View>
            </View>
        </Modal>

    )
};



const styles = StyleSheet.create({
    modalBox: {
        width: '80%',
        backgroundColor: color.white,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 5,
        borderColor: color.orange,
    },
    buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
        //   backgroundColor:color.orange,
    },
    buttonsText: {
        alignSelf: "flex-start",
        fontSize: 16,
        color: color.black
    },
    divider: {
        height: 2,
        backgroundColor: color.orange,

    },
    imageModel: {
        width: '100%',
        height: '100%',
    }
});

export { PermissionModal, AlertModal, UpdateInputModal, CustomModal, ImageModal };