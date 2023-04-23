import React, {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
View,
Text,
ImageBackground,
StyleSheet
}
from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {width} from '../../constants/GlobalConstants.js';
import Button from '../../UI/Button';

export const UserRole = ({ navigation }) => {
    
    
    const updateBarberState = () => {
        AsyncStorage.setItem('role', "barber");
        navigation.navigate('LoginScreen', {role:"barber"});
    }

    const updateCustomerState = () => {
        AsyncStorage.setItem('role', "customer");
        navigation.navigate('LoginScreen', {role:"customer"});
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/splash_3.jpg')} resizeMode='cover'>
                <LinearGradient colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.7)']} style={styles.linearWrapper}>
                    <View style={styles.buttonContainer} >
                        <Button text="I'm a Barber" onPress={updateBarberState} />
                        <Button text="I'm a Customer"  onPress={updateCustomerState}/>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearWrapper:{
        width:width,
        height:'100%',
    },
    buttonContainer:{
        flex:1,
        width:width,
        justifyContent: 'flex-end',
        paddingBottom:20,
        paddingHorizontal:10,
    }

});

