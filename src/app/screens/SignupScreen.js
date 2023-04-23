import React, {useState} from 'react'
import { SafeAreaView, ScrollView,StatusBar } from 'react-native';
import Signup from '../components/Auth/Signup/Signup.js';
import { createUser } from '../util/auth.js';

const SignupScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{flex:1}}>
      <StatusBar translucent={true} backgroundColor="black" />
        <Signup navigation={navigation} />
      </SafeAreaView>
    </ScrollView>
    
  )
};



export default SignupScreen;