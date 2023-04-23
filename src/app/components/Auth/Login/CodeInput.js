import React, {useContext, useRef, useState} from 'react'
import {View, TextInput } from 'react-native';
import {COLORS as color} from '../../../constants/GlobalConstants';
import {styles} from '../../../constants/Style';
import { AuthContext } from '../AuthContent';
const CodeInput = ({verify}) => {
    const {otp, setOtp} = useContext(AuthContext);

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();

    
    const onChangeTextHandler = (text, currentInputState, prevInputState, nextInputState) => {
        if(text){
            currentInputState.current.setNativeProps({
                style:{backgroundColor:color.orange},
                cursorColor:color.white,
            });
            nextInputState && nextInputState.current.focus();
            
        }
        else{
            currentInputState.current.setNativeProps({
                style:{backgroundColor:'transparent'},
                cursorColor:color.grey100,
            });
            prevInputState && prevInputState.current.focus();
        }
        
    };

    return (
        <View style={styles.otpInputContainer}>
            <View style={[styles.codeInputView]}>
                <TextInput
                style={styles.codeInput}
                maxLength={1} 
                keyboardType="numeric"
                cursorColor={color.grey100} 
                ref={firstInput}
                onChangeText={(text) => {
                    setOtp({...otp, 1:text});
                    verify(true);
                    onChangeTextHandler(text, firstInput, null, secondInput);
                }} />
            </View>
            <View style={[styles.codeInputView]}>
                <TextInput
                style={styles.codeInput}
                maxLength={1} 
                keyboardType="numeric" 
                ref={secondInput}
                cursorColor={color.grey100} 
                onChangeText={(text) => {
                    setOtp({...otp, 2:text});
                    verify(true);
                    onChangeTextHandler(text, secondInput, firstInput,thirdInput);
                }} />
            </View>
            <View style={[styles.codeInputView]}>
                <TextInput
                style={styles.codeInput}
                maxLength={1} 
                keyboardType="numeric" 
                ref={thirdInput}
                cursorColor={color.grey100} 
                onChangeText={(text) => {
                    setOtp({...otp, 3:text});
                    verify(true);
                    onChangeTextHandler(text, thirdInput, secondInput,fourthInput);
                }} />
            </View>
            <View style={[styles.codeInputView]}>
                <TextInput
                style={styles.codeInput}
                maxLength={1} 
                keyboardType="numeric" 
                ref={fourthInput}
                cursorColor={color.grey100} 
                onChangeText={(text) => {
                    setOtp({...otp, 4:text});
                    verify(false);
                    onChangeTextHandler(text, fourthInput, thirdInput, null);
                }} />
            </View>
        </View>  
    )
};

export default CodeInput;