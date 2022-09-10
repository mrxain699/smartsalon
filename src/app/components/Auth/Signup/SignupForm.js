import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {styles} from '../../../constants/Style';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import {COLORS as color} from '../../../constants/GlobalConstants';
const SignupForm = ({navigation}) => {
  return (
    <View style={[styles.container, componenetStyle.signupForm]} >
      <Text style={[styles.heading, componenetStyle.heading]}>Create an Account</Text>
      <View style={componenetStyle.inputContainer}>
        <Input placeholder="User name" autofocus="true"  />
        <Input placeholder="Email address"  />
        <Input placeholder="Phone number"  />
        <Input placeholder="Date of Birth" />
        <Input placeholder="password" />
        <Input placeholder="Confirm Password"/>
      </View>
      <Button text="Sign up" />
      <Text style={styles.conditionText}>By continuing Sign up you agree to the following 
      Terms & Conditions without reservation.</Text>
      <Text style={styles.accountText}>Already have an account?
        <Text style={styles.textBtn} onPress={()=>navigation.navigate('LoginScreen')}>  Sign in</Text>
      </Text>    
    </View>
  )
};

const componenetStyle = StyleSheet.create({
  signupForm:{
    paddingHorizontal:20,
  },
  heading:{
    paddingVertical:20,
  },
  inputContainer:{
    marginBottom:20,
    alignItems: 'center',
  }
});

export default SignupForm;
