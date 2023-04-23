import React from 'react';
import {View, ScrollView} from 'react-native';
import LoginHeader from './LoginHeader.js';
import LoginForm from './LoginForm.js';
import {styles} from '../../../constants/Style';
const Login = ({navigation, role}) => {
  return (
    <View style={styles.wrapper}>
      <LoginHeader />
      <LoginForm navigation={navigation} role={role}/>
    </View>
  )
};

export default Login;