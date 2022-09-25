import React from 'react';
import { Text, Pressable, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../constants/Style';
import { COLORS as color } from '../constants/GlobalConstants';
const Button = ({text, style, onPress, state, onLoad}) => {
  const onPressHandler = () => {
    onPress && onPress();
  };
  return (
    <LinearGradient
      colors={[state ? color.grey500 : color.orange100, state ? color.grey500 : color.orange]}
      start={{x: 0.5, y: 0}}
      end={{x: 1, y: 1}}
      style={[styles.btn, style && style]}
    >
      <Pressable style={[{width:'100%', alignItems:'center', justifyContent:'center'}, onLoad && {flexDirection:'row'}]} onPress={onPressHandler} disabled={state ? state : onLoad ? onLoad : false }>
        {onLoad ? (<ActivityIndicator size="small" color={color.white} style={{marginRight:20}}/>) : ''}
        <Text style={[styles.btnText, {color:state ? color.grey100 : color.white}]} >{text}</Text>
      </Pressable>
    </LinearGradient>
  )
};

export default Button;
