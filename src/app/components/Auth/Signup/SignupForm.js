import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {styles} from '../../../constants/Style';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import { AuthContext } from '../AuthContent';
import CustomModal from '../../CustomModal';


const SignupForm = ({navigation}) => {

  const {credentials, setCredentials, registerUser, onLoad, emailError} = useContext(AuthContext);
  const {username, email, phone, password, confirm_password} = credentials;
 

  function changeInputHandler(identifierName, enteredValue){
    setCredentials((curInputValues)=>{
      return {
        ...curInputValues,
        [identifierName]: enteredValue,
      }
    });
  };

  return (
    <View style={[styles.container, componenetStyle.signupForm]} >

      <Text style={[styles.heading, componenetStyle.heading]}>Create an Account</Text>
      <View style={componenetStyle.inputContainer}>
        <Input placeholder="someone123"
        autofocus="true"
        onChangeText={changeInputHandler.bind(this, 'username')}
        value={username}
         />
        <Input placeholder="someone@gmail.com"
        onChangeText={changeInputHandler.bind(this, 'email')}
        value={email}  />
        {emailError && (<Text style={{color:'red', marginTop:2, textAlign: 'left'}}>{emailError}</Text>)}
        <Input placeholder="03099303698"
        onChangeText={changeInputHandler.bind(this, 'phone')}
        keyboardType="numeric"
        minLength={11}
        maxLength={11}
        value={phone}  />
        <Input placeholder="password" 
        secureTextEntry={true}
        onChangeText={changeInputHandler.bind(this, 'password')}
        minLength={8}
        maxLength={8}
        value={password} />
        <Input placeholder="Confirm Password" 
        secureTextEntry={true}
        onChangeText={changeInputHandler.bind(this, 'confirm_password')}
        minLength={8}
        maxLength={8}
        value={confirm_password}/>
      </View>
      <Button text="Sign up" onPress={()=>{
        registerUser(username, email, phone, password)
      }} 
      onLoad={onLoad && onLoad}
      />
      <Text style={styles.conditionText}>By continuing Sign up you agree to the following 
      Terms & Conditions without reservation.</Text>
      <Text style={[styles.accountText,{marginBottom:20}]}>Already have an account?
        <Text style={styles.textBtn} onPress={()=>navigation.replace('LoginScreen')}>  Sign in</Text>
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
