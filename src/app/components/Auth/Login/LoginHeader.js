import React from 'react'
import { View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {width, COLORS as color} from '../../../constants/GlobalConstants';
import {styles} from '../../../constants/Style';

const LoginHeader = () => {
  return (
    <View style={styles.loginHeader}>
      <ImageBackground source={require('../../../assets/images/login_sc.jpg')} style={styles.loginHeaderImage} >
        <LinearGradient colors={[color.alpha, color.alpha]} style={styles.alphaLinearGradient}>
          <View style={{width:width, height:'100%'}}/>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
};

export default LoginHeader;