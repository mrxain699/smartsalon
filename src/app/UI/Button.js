import React from 'react';
import { Text, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../constants/Style';
const Button = ({text, style, onPress}) => {
  const onPressHandler = () => {
    onPress();
  };
  return (
    <LinearGradient
      colors={['#FE9254', '#FD7456',]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 1}}
      style={[styles.btn, style && style]}
    >
      <Pressable style={{width:'100%', alignItems:'center'}} onPress={onPressHandler}>
        <Text style={styles.btnText} >{text}</Text>
      </Pressable>
    </LinearGradient>
  )
};

export default Button;
