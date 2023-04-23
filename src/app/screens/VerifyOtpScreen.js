import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../constants/Style';
import VerifyOtp from '../components/Auth/Login/VerifyOtp';
const VerifyOtpScreen = ({navigation, route}) => {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar translucent={true} backgroundColor="black" />
            <VerifyOtp navigation={navigation} route={route}/>
        </SafeAreaView>
    )
};

export default VerifyOtpScreen;