import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../constants/Style';
import ResetPassword from '../components/Auth/Login/ResetPassword';
const ResetPasswordScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar translucent={true} backgroundColor="black" />
      <ResetPassword  navigation={navigation} route={route}/>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen
