import React from 'react';
import {View, Image, Text} from 'react-native';
import { styles } from '../../constants/Style';
import {Slides as slides} from '../../constants/GlobalConstants';
import * as Animatable from 'react-native-animatable';
const Slide = ({item, currentSlideIndex}) => {
    return (
      <Animatable.View style={styles.slideContainer} animation="slideInDown">
        <Image source={item.image}
        style={styles.slideImage} />
        <View style={styles.slideIndicatorContainer}>
          {slides.map((_, index)=>(
            <View key={index} style={[styles.slideIndicators, currentSlideIndex == index && styles.activeIndicator]}/>
          ))}
        </View>
        <Animatable.Text animation="pulse" style={styles.slideTitle}>{item.heading}</Animatable.Text>
        <Text style={[styles.slideSubTitle, currentSlideIndex === slides.length - 1 && {paddingHorizontal:80}]}>{item.subheading}</Text>        
      </Animatable.View>
    )
};

export default Slide;