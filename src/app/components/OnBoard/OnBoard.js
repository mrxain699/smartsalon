import React, { useState, useRef } from 'react';
import {View, FlatList} from 'react-native';
import {width, height, Slides as slides} from '../../constants/GlobalConstants';
import { styles } from '../../constants/Style';
import Slide from './Slide';
import Footer from './OnBoardFooter';
import * as Animatable from 'react-native-animatable';
const OnBoard = ({navigation}) => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null); 

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if(nextSlideIndex != slides.length){
      const offset  = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length-1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <View style={styles.container}>
        <FlatList
        animation="slideInDown"
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        contentContainerStyle={{height:height * 0.82}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><Slide item={item} currentSlideIndex={currentSlideIndex} />}
        />
        <Footer currentSlideIndex={currentSlideIndex} skip={skip} goNextSlide={goNextSlide} navigation={navigation} />
    </View>
   
  )
};

export default OnBoard;
