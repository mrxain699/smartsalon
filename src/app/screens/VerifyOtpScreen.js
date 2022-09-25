import React from 'react'
import { SafeAreaView } from 'react-native';
import { styles } from '../constants/Style';
import VerifyOtp from '../components/Auth/Signup/VerifyOtp';
const VerifyOtpScreen = ({route, navigation}) => {
    const mode  = route && route.params?.mode;
    return (
        <SafeAreaView style={styles.container}>
            <VerifyOtp mode={mode} navigation={navigation}/>
        </SafeAreaView>
    )
};

export default VerifyOtpScreen;