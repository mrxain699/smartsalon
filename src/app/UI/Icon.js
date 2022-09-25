import React from 'react'
import Ionicons  from 'react-native-vector-icons/Ionicons';
const CustomIcon = ({name, size, color, style, onPress}) => {
  return (
    <Ionicons 
    name={name} 
    size={size} 
    color={color} 
    style={style && style } 
    onPress={onPress && onPress}
    />
  )
};

export default CustomIcon;