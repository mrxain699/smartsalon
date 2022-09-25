import React, {useState} from 'react'
import { SafeAreaView, ScrollView } from 'react-native';
import Signup from '../components/Auth/Signup/Signup.js';
import { createUser } from '../util/auth.js';

const SignupScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <SafeAreaView style={{flex:1}}>
        <Signup navigation={navigation} />
      </SafeAreaView>
    </ScrollView>
    
  )
};



export default SignupScreen;