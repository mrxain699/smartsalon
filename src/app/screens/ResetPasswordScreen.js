import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from '../constants/Style';
import ResetPassword from '../components/Auth/Login/ResetPassword';
const ResetPasswordScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ResetPassword  navigation={navigation}/>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen
