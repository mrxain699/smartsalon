import React from 'react'
import { TextInput } from 'react-native';
import { InputsProps } from '../constants/GlobalConstants';
import {styles } from '../constants/Style';

const Input = ({placeholder, autofocus, keyboardType,  secureTextEntry, style, onChangeText, value, maxLength, minLength}) => {
  return (
    <TextInput placeholder={placeholder}
      autofocus={autofocus}
      {...InputsProps}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry && secureTextEntry}
      maxLength={maxLength && maxLength}
      minLength={maxLength && minLength}
      style={[styles.inputs, style && style]}
      onChangeText={onChangeText}
      value={value} 
    />
  )
}

export default Input;
