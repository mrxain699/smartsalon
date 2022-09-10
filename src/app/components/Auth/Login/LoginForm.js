import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {styles} from '../../../constants/Style';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
const LoginForm = ({navigation}) => {
  return (
    <Animatable.View style={styles.loginForm} animation="fadeInUpBig">
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to your account</Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" autofocus="true" />
        <Input placeholder="Password" />
      </View>
      <Button text="Login" />
      <TouchableOpacity onPress={()=>navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
      <Text style={styles.accountText}>Don't have an account?
        <Text style={styles.textBtn} onPress={()=>navigation.navigate('SignupScreen')}> Sign up</Text>
      </Text>    
    </Animatable.View>
  )
};

export default LoginForm;