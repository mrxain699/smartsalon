import React from 'react';
import {View, Image, Text} from 'react-native';
import { styles } from '../../constants/Style';
import {Slides as slides} from '../../constants/GlobalConstants';
const Slide = ({item, currentSlideIndex}) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={item.image}
        style={styles.slideImage} />
        <View style={styles.slideIndicatorContainer}>
          {slides.map((_, index)=>(
            <View key={index} style={[styles.slideIndicators, currentSlideIndex == index && styles.activeIndicator]}/>
          ))}
        </View>
        <Text style={styles.slideTitle}>{item.heading}</Text>
        <Text style={[styles.slideSubTitle, currentSlideIndex === slides.length - 1 && {paddingHorizontal:80}]}>{item.subheading}</Text>        
      </View>
    )
};

export default Slide;