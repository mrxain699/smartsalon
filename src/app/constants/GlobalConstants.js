import { Dimensions } from "react-native";
import { authScreenStyle as styles } from "./Style"; 

export const {width, height}  = Dimensions.get('window');

export const COLORS = {
    alpha:'rgba(0,0,0,0.4)',
    white:'#ffffff',
    black:'#000000',
    grey50:'#858585',
    grey100:'#9B9B9B',
    grey500:'#F0F0F0',
    grey700:'#333333',
    grey800:'#666666',
    orange:'#FE9654',
};

export const Slides = [
    {
      id:'1',
      image:require('../assets/images/slide_1.png'),
      heading:'Find and Book Services',
      subheading:'Find and book Barber, Beauty, & Spa services anywhere, anytime',
  
    },
    {
      id:'2',
      image:require('../assets/images/slide_2.png'),
      heading:'Style that fit your Lifestyle',
      subheading:'Be your own kind of beautiful and create a new look',
    },
  
];

export const InputsProps = {
    placeholderTextColor:COLORS.grey100,  
    autoCapitalize:'none',
};




