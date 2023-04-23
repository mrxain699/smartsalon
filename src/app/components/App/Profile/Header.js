import React, { useContext, useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS as colors, width, height, REQUEST_URL } from '../../../constants/GlobalConstants';
import { PermissionModal, AlertModal } from '../../../UI/Modal';
import ImagePicker from 'react-native-image-crop-picker';
import { AuthContext } from '../../Auth/AuthContent';

const half_width = width / 2 - 70;
const Header = ({navigation}) => {
    const {alert, alertTitle, alertMessage, alertType, alertBtnText, setAlert} = useContext(AuthContext);
    const [permissionAlert, setPermissionAlert] = useState(false);
   

    const {
        profileImage,
        upload_image,
        uploadStatus,
    } = useContext(AuthContext);



    const onCamera = () => {
        ImagePicker.openCamera({
            width: 150,
            height: 150,
            cropping: true,
            mediaType:'photo',
            includeBase64:true,
        })
            .then(image => {
                upload_image(image, "customer");
                setPermissionAlert(false);
                
            }).catch(error=>{
                console.log(error);
            })

    };

    const onGallery = () => {
        ImagePicker.openPicker({
            width: 150,
            height: 150,
            cropping: true,
            mediaType:'photo',
            includeBase64:true,
        })
            .then(image => {
                upload_image(image, "customer");
                setPermissionAlert(false);
               
            })
            .catch(error=>{
                console.log(error);
            })
    };


    return (
        <View style={styles.headerContainer}>
            <PermissionModal
                animationType="fade"
                transparent={true}
                visible={permissionAlert}
                onPress={()=>setPermissionAlert(false)}
                onCamera={onCamera}
                onGallery={onGallery}
            />
            <AlertModal
                animationType="fade"
                transparent={true}
                visible={alert}
                type={alertType}
                title={alertTitle}
                message={alertMessage}
                btn={alertBtnText}
                onPress={() => { setAlert(false) }}
            />
            <Pressable style={styles.imageContainer} onPress={() => setPermissionAlert(true)}>
                <Image source={profileImage ? { uri: REQUEST_URL+profileImage } : require('../../../assets/images/default.png')} style={styles.image} />
            </Pressable>
        </View>


    )
};

const styles = StyleSheet.create({
    headerContainer: {
        width: width,
        height: 200,
        backgroundColor: '#473C33',
        position: 'relative',
        borderBottomRightRadius: 300,
        borderColor: colors.orange,
        borderBottomColor: colors.orange,
        borderRightColor: colors.orange,
        borderBottomWidth: 5,
        borderRightWidth: 5,
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: colors.orange,
        position: 'relative',
        bottom: -100,
        left: half_width,
        backgroundColor: colors.white,
        overflow: 'hidden',
        zIndex:999,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },

});

export default Header;