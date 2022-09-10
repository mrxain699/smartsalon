import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styles} from '../../../constants/Style';
import { COLORS as color} from '../../../constants/GlobalConstants';
import CustomModal from '../../CustomModal';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
const ForgotPassword = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalHandler = () => {
    setModalVisible(!modalVisible);
  };
  
  return (
    <View style={[styles.container, {paddingVertical:20, paddingHorizontal:20,}]}>
      <CustomModal 
      animationType="fade" 
      transparent={true} 
      visible={modalVisible} 
      title="Code has been sent to reset a new password."
      message="You'll shortly receive an email with a code to setup a new password."
      btn="Done"
      onPress={toggleModalHandler}
      />
      <Text style={styles.heading}>Forgot password</Text>
      <Text style={[styles.subtitle, componentStyle.subheading]}>Please enter your email address. You will receive a code to create a new password via email</Text>
      <View style={[styles.inputContainer]}>
        <Input placeholder="Email" autofocus="true" />
      </View>
      <Button text="Reset Password"  onPress={toggleModalHandler}/>
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
