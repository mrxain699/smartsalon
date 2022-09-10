import React from 'react'
import { TextInput } from 'react-native';
import { InputsProps } from '../constants/GlobalConstants';
import {styles } from '../constants/Style';

const Input = ({placeholder, autofocus}) => {
  return (
    <TextInput placeholder={placeholder}
        autofocus={autofocus}
        {...InputsProps}
        style={styles.inputs} 
    />
  )
}

export default Input;
