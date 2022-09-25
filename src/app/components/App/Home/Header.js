import React from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon  from 'react-native-vector-icons/Ionicons.js';
import {width, COLORS as color} from '../../../constants/GlobalConstants';
import {styles} from '../../../constants/Style';
const Header = () => {
  return (
    <KeyboardAvoidingView style={styles.container} 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 600}
    enabled={Platform.OS == "ios" ? true : false}
    >
    <View style={styles.homeHeader}>
        <ImageBackground source={require('../../../assets/images/homeheader.jpg')} style={styles.loginHeaderImage} >
            <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.6)']} style={styles.alphaLinearGradient}>
                <View style={styles.headerBar}>
                    <Text style={styles.homeHeaderText}>Find and book best services</Text>
                    <View style={styles.searchInputContainer}>
                        <TouchableOpacity style={styles.searchBtn}>
                            <Icon name="search-outline" size={20} color={color.grey300}/>
                        </TouchableOpacity>
                        <TextInput placeholder="Search salon, barber"
                        style={styles.searchInput}
                        cursorColor={color.grey800}
                        placeholderTextColor={color.grey800}
                        />
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    </View>
    </KeyboardAvoidingView>
  )
};

export default Header;