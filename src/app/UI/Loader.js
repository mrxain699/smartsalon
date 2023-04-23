import React from 'react'
import {ActivityIndicator, StyleSheet, View } from 'react-native';
import { COLORS as color } from '../constants/GlobalConstants';
const Loader = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="small" color={color.orange} />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:"center",
    }
});
export default Loader

