import React from 'react';
import {View} from 'react-native';
import LoginHeader from './LoginHeader.js';
import LoginForm from './LoginForm.js';
import {styles} from '../../../constants/Style';
const Login = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <LoginHeader />
      <LoginForm navigation={navigation}/>
    </View>
  )
};

export default Login;