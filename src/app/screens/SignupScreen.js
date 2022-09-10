import React from 'react'
import { SafeAreaView } from 'react-native';
import Signup from '../components/Auth/Signup/Signup.js';

const SignupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Signup navigation={navigation} />
    </SafeAreaView>
  )
};



export default SignupScreen;