import React, {useState} from 'react'
import { Text, View, StyleSheet} from 'react-native';
import {styles} from '../../../constants/Style';
import {COLORS as color} from '../../../constants/GlobalConstants'
import Button from '../../../UI/Button';
import Input from '../../../UI/Input'
const VerifyPhone = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.heading, styles.headingBold]}>Verify your Email</Text>
            <Text style={[styles.subtitle, styles.subtitleLight]}>We have sent you an email with a code to email zaininam699@gmail.com </Text>
            <View style={[styles.inputContainer, {marginHorizontal:30}]}>
                <Input 
                placeholder="Enter your email" 
                keyboardType="email-address"
                placeholderTextColor={color.grey100}
                cursorColor={color.grey100}
                />
            </View> 
            <Button text="Continue" style={{marginHorizontal:30}} onPress={()=>{navigation.navigate('VerifyOtpScreen')}} />
        </View>
    )
};


export default VerifyPhone;
