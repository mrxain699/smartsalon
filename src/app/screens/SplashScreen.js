import React from 'react';
import {SafeAreaView, StyleSheet, View, Image, StatusBar} from 'react-native';
import { styles } from '../constants/Style';
import { COLORS as color, width } from '../constants/GlobalConstants';
import * as Animatable from 'react-native-animatable';
const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={[styles.container, screenStyle.container]}>
            <Animatable.Image source={require('../assets/images/splash.png')} animation="slideInDown" />
        </View>
    </SafeAreaView>
  )
};

const screenStyle = StyleSheet.create({
    container:{
        backgroundColor:'#1F1B25',
        justifyContent:'center',
        alignItems:'center',
    }, 
    image:{
        width:width,
        height:200,
        resizeMode:'contain'
    } 
});
export default SplashScreen;
