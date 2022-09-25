import React from 'react';
import { SafeAreaView } from 'react-native';
import VerifyEmail from '../components/Auth/Signup/VerifyEmail';
import { styles } from '../constants/Style';

const VerifyEmailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <VerifyEmail navigation={navigation}/>
    </SafeAreaView>
  )
};

export default VerifyEmailScreen;