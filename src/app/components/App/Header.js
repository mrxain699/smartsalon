import React from 'react'
import { 
View,
Text, 
KeyboardAvoidingView, 
ImageBackground, 
TouchableOpacity,
Platform,
TextInput 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon  from 'react-native-vector-icons/Ionicons.js';
import {COLORS as color} from '../../constants/GlobalConstants';
import {styles} from '../../constants/Style';
const Header = ({image, title, subtitle,  style, location, component, search}) => {
  return (
    <KeyboardAvoidingView style={styles.container} 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 600}
    enabled={Platform.OS == "ios" ? true : false}
    >
    <View style={styles.appHeader}>
        <ImageBackground source={image} style={styles.loginHeaderImage} >
            <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.6)']} style={styles.alphaLinearGradient}>
                <View style={style.headerBar}>
                    <Text style={style.headerTitle}>{title}</Text>
                </View>
            </LinearGradient>
        </ImageBackground>
    </View>
    </KeyboardAvoidingView>
  )
};

export default Header;
