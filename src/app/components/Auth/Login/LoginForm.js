import React, {useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from '../../../constants/Style';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import { AuthContext } from '../AuthContent';
const LoginForm = ({navigation}) => {
  const {loginCredentials, setLoginCredentials, loginUser, onLoad, loginError} = useContext(AuthContext);
  const {email, password } = loginCredentials;

  function changeInputHandler(identifierName, enteredValue){
    setLoginCredentials((curInputValues)=>{
      return {
        ...curInputValues,
        [identifierName]: enteredValue,
      }
    });
  };

  return (
    <View style={styles.loginForm}>
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.subtitle}>Login to your account</Text>
      {loginError && (<Text style={{color:'red', textAlign:'center', marginTop:5,}}>{loginError}</Text>)}
      <View style={styles.inputContainer}>
        <Input placeholder="Email"
        onChangeText={changeInputHandler.bind(this, 'email')}
        value={email}/>
        <Input placeholder="password" 
        secureTextEntry={true}
        onChangeText={changeInputHandler.bind(this, 'password')}
        minLength={8}
        maxLength={8}
        value={password}
         />
      </View>
      <Button text="Login" onPress={()=>{loginUser(email, password)}} onLoad={onLoad && onLoad} />
      <TouchableOpacity onPress={()=>navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
      <Text style={styles.accountText}>Don't have an account?
        <Text style={styles.textBtn} onPress={()=>navigation.replace('SignupScreen')}> Sign up</Text>
      </Text>    
    </View>
  )
};

export default LoginForm;