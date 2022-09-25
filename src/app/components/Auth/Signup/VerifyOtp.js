import React, {useState} from 'react'
import { View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../../constants/Style';
import {COLORS as color} from '../../../constants/GlobalConstants';
import CodeInput from './CodeInput';
import Button from '../../../UI/Button';
const VerifyOtp = ({mode, navigation}) => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const btnHandler = (state) => {
    setBtnDisabled(state);
  };
  const navigateHandler = () =>{
    mode ? navigation.navigate('ResetPasswordScreen') : navigation.navigate('AppScreen'); 
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, styles.headingBold]}>{mode ? "Reset Password Verification" : "Email Verification"}</Text>
      <Text style={[styles.subtitle, styles.subtitleLight, {marginTop:10,}]}>Enter your OTP code here</Text>
      <CodeInput verify={btnHandler}/>
      <Text style={styles.otpTime}>00:25</Text>
      <Text style={[styles.otpTime, {marginTop:30, fontWeight:'500', color:color.black}]}>Didn't you received any code?</Text>
      <TouchableOpacity>
        <Text style={{color:color.orange, textAlign: 'center', fontWeight: 'bold'}}>Resend a new code.</Text>
      </TouchableOpacity>
      <Button text="Verify" style={{marginHorizontal:40, marginVertical:30}} state={btnDisabled} onPress={navigateHandler}/>
    </View>
  )
};



export default VerifyOtp;
