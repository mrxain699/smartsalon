import React, {useContext, useState} from 'react'
import { View, Text} from 'react-native';
import {styles} from '../../../constants/Style';
import CodeInput from './CodeInput';
import Button from '../../../UI/Button';
import { AuthContext } from '../AuthContent';
const VerifyOtp = ({navigation, route}) => {
  const {otp, code, setCode, setOtp, initInputCode} = useContext(AuthContext);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [error, setError] = useState('');

  const btnHandler = (state) => {
    setBtnDisabled(state);
  };

  const verifyCode = () => {
    let input_code = '';
    for(const key in otp){
      input_code += otp[key];
    }
    if(input_code == code){
      setCode('');
      setOtp(initInputCode);
      navigation.replace("ResetPasswordScreen", {userRole:route.params.userRole});
    }
    else{
        setError("Invalid Code");
    }
  };



  

  return (
    <View style={[styles.container, {paddingTop:50}]}>
      <Text style={[styles.heading, styles.headingBold]}>Email Verification</Text>
      <Text style={[styles.subtitle, styles.subtitleLight, {marginTop:10,}]}>Enter your OTP code here</Text>
      <CodeInput verify={btnHandler}/>
      {error && (<Text style={[styles.error, {alignSelf:'center'}]}>Invalid Code</Text>)}
      <Button text="Verify" style={{marginHorizontal:40, marginVertical:30}} state={btnDisabled} onPress={verifyCode}/>
    </View>
  )
};



export default VerifyOtp;
