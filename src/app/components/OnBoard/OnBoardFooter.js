import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { styles } from '../../constants/Style';
import LinearGradient from 'react-native-linear-gradient';
import { Slides as slides, COLORS as color } from '../../constants/GlobalConstants';
const Footer = ({skip, goNextSlide, currentSlideIndex, navigation}) => {
    return (
      <View style={styles.slideFooter}>
        {
            currentSlideIndex == slides.length -1 ?  (
            <View style={{height:50}}>
            <LinearGradient
                colors={['#FE9254', '#FD7456',]}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 1}}
                style={[styles.slideBtn, {borderRadius:100}]}
            >
                <Pressable style={{width:'100%', alignItems:'center'}} onPress={()=>navigation.replace('UserRoleScreen')}>
                    <Text style={{color:color.white, fontWeight:'bold', fontSize:15}} >Get Started</Text>
                </Pressable>
            </LinearGradient>
            </View>
            )
            :
            (
            <View style={{flexDirection:'row'}}>
            <Pressable style={[styles.slideBtn, {backgroundColor:'transparent', borderWidth:1, borderColor:'orange'} ]} onPress={skip}>
                <Text style={{fontWeight:'bold', fontSize:15, color:'#000000'}}>Skip</Text>
            </Pressable>
            <View style={{width:15}} />
            <LinearGradient
            colors={['#FE9254', '#FD7456',]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={[styles.slideBtn]}
            >
                <Pressable style={{width:'100%', alignItems:'center'}} onPress={goNextSlide}>
                    <Text style={{color:color.white, fontWeight:'bold', fontSize:15}} >Next</Text>
                </Pressable>
            </LinearGradient>
            </View>
            ) 
        }

      </View>
    )
};

export default Footer;

