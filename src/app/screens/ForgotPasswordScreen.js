import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ForgotPassword from '../components/Auth/Login/ForgotPassword';
const ForgotPasswordScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={true} backgroundColor="black" />
      <ForgotPassword navigation={navigation} route={route}/>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen;
