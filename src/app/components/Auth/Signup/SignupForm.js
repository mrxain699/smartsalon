import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {styles} from '../../../constants/Style';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import { AuthContext } from '../AuthContent';


const SignupForm = ({navigation}) => {

  const {registerCredentials, setRegisterCredentials, register, errors, isLoading} = useContext(AuthContext);
  const {name, email, phone, address, city, password} = registerCredentials;
 

  function changeInputHandler(identifierName, enteredValue){
    setRegisterCredentials((curInputValues)=>{
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
        <Input placeholder="Full Name"
        autofocus="true"
        onChangeText={changeInputHandler.bind(this, 'name')}
        value={name}
         />
        {errors && errors.name && <Text style={styles.error}>{errors.name}</Text>}
        <Input placeholder="Email"
        onChangeText={changeInputHandler.bind(this, 'email')}
        value={email}  
        />
        {errors && errors.email && <Text style={styles.error}>{errors.email}</Text>}
        <Input placeholder="Phone #"
        onChangeText={changeInputHandler.bind(this, 'phone')}
        keyboardType="numeric"
        minLength={11}
        maxLength={11}
        value={phone}  
        />
        {errors && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
        <Input placeholder="Address"
        onChangeText={changeInputHandler.bind(this, 'address')}
        value={address}  
        />
        {errors && errors.address && <Text style={styles.error}>{errors.address}</Text>}
        <Input placeholder="City"
        onChangeText={changeInputHandler.bind(this, 'city')}
        value={city}  
        />
        {errors && errors.city && <Text style={styles.error}>{errors.city}</Text>}
        <Input placeholder="Password" 
        secureTextEntry={true}
        onChangeText={changeInputHandler.bind(this, 'password')}
        value={password} 
        />
        {errors && errors.password && <Text style={styles.error}>{errors.password}</Text>}
      </View>
      <Button text="Sign up" onPress={()=>{
        register();
      }} 
      loading={isLoading && isLoading}
      />
      <Text style={styles.conditionText}>By continuing Sign up you agree to the following 
      Terms & Conditions without reservation.</Text>
      <Text style={[styles.accountText,{marginBottom:20}]}>Already have an account?
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
