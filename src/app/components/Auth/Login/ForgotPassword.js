import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styles} from '../../../constants/Style';
import { COLORS as color} from '../../../constants/GlobalConstants';
import CustomModal from '../../CustomModal';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
import { AuthContext } from '../AuthContent';
const ForgotPassword = ({navigation, route}) => {
  const {email, setEmail, send_email, errors, isLoading, modalVisible, toggleModalHandler, setIsLoading, setErrors, initErr} = useContext(AuthContext);
  function changeInputHandler(identifierName, enteredValue){
    setEmail(enteredValue);
  };

  const closeModal = () => {
    toggleModalHandler();
    setIsLoading(false);
    setEmail('');
    navigation.replace('VerifyOtpScreen', {userRole:route.params.userRole});
  }

  useEffect(()=>{
    setErrors(initErr);
  }, []);
  
  return (
    <View style={[styles.container, {paddingVertical:20, paddingHorizontal:20,}]}>
      <CustomModal 
      animationType="fade" 
      transparent={true} 
      visible={modalVisible} 
      title="Code has been sent to reset a new password."
      message="You'll shortly receive an email with a code to setup a new password."
      btn="Done"
      onPress={()=>{closeModal()}}
      />
      <Text style={styles.heading}>Forgot password</Text>
      <Text style={[styles.subtitle, componentStyle.subheading]}>Please enter your email address. You will receive a code to create a new password via email</Text>
      <View style={[styles.inputContainer]}>
      {errors.error ? (<Text style={{ color: 'red', textAlign: 'center', marginTop: 5, }}>{errors.error}</Text>) : ''}
      <Input placeholder="Email"
      onChangeText={changeInputHandler.bind(this, 'email')}
      value={email} />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : ''}
      </View>
      <Button text="Send Instructions"  onPress={()=>{send_email(route.params.userRole)}} loading={isLoading && isLoading} />
    </View>
  )
};

const componentStyle = StyleSheet.create({
  subheading:{
    paddingHorizontal:20,
    color:color.grey700,
    fontSize:15,
    lineHeight:22,
    marginTop:10,
  },
  
});



export default ForgotPassword;
