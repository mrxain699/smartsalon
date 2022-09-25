import React from 'react';
import { SafeAreaView } from 'react-native';
import ForgotPassword from '../components/Auth/Login/ForgotPassword';
const ForgotPasswordScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <ForgotPassword navigation={navigation}/>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen;
