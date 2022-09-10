import React from 'react'
import { View } from 'react-native';
import {styles} from '../../../constants/Style';
import SignupForm from './SignupForm';
const Signup = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <SignupForm navigation={navigation}/>
    </View>
  )
}

export default Signup;