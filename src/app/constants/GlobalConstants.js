import { Dimensions } from "react-native";
import { authScreenStyle as styles } from "./Style"; 

export const {width, height}  = Dimensions.get('window');
export const API_KEY = "AIzaSyC8KYRS239ppg3OCgKvf6W-3KBcb5MlLjg";
export const REQUEST_URL = "http://192.168.47.178:80/smartsalon/public/";
export const COLORS = {
    alpha:'rgba(0,0,0,0.4)',
    white:'#ffffff',
    black:'#000000',
    grey50:'#858585',
    grey100:'#9B9B9B',
    grey200:'#C7C7C7',
    grey300:'#8E8E93',
    grey500:'#F0F0F0',
    grey700:'#333333',
    grey800:'#666666',
    orange:'#FE9654',
    orange100:'#FD7456',
};

export const Slides = [
    {
      id:'1',
      image:require('../assets/images/slide1.png'),
      heading:'Find and Book Services',
      subheading:'Find and book Barber, Beauty, & Spa services anywhere, anytime',
  
    },
    {
      id:'2',
      image:require('../assets/images/slide1.png'),
      heading:'Style that fit your Lifestyle',
      subheading:'Be your own kind of beautiful and create a new look',
    },
  
];

export const InputsProps = {
  placeholderTextColor:COLORS.grey100,  
  autoCapitalize:'none',
};

export const workers = [
  {
    id:1,
    image:require('../assets/images/face5.jpg'),
    name: 'Daniel Williams',
  },
  {
    id:2,
    image:require('../assets/images/face18.jpg'),
    name: 'Daniel Williams',
  },
  {
    id:3,
    image:require('../assets/images/face5.jpg'),
    name: 'Daniel Williams',
  },
  {
    id:4,
    image:require('../assets/images/face18.jpg'),
    name: 'Daniel Williams',
  },
  {
    id:5,
    image:require('../assets/images/face5.jpg'),
    name: 'Daniel Williams',
  },
  {
    id:6,
    image:require('../assets/images/face18.jpg'),
    name: 'Daniel Williams',
  },
  
];

export const tabs = [
  {
    status:'About'
  },
  {
    status:'Services'
  },
  {
    status:'Gallery'
  },
  {
    status:'Reviews'
  }
];


export const appointmentTabs = [
  {
    status:'Pending'
  },
  {
    status:'Booked'
  },
  {
    status:'Cancelled'
  },
];

export const stickers = [
  {
    id:1,
    sticker:require('../assets/images/HairStickers/hair1.png'),
  },
  {
    id:2,
    sticker:require('../assets/images/HairStickers/hair2.png'),
  },
  {
    id:3,
    sticker:require('../assets/images/HairStickers/hair3.png'),
  },
  {
    id:4,
    sticker:require('../assets/images/HairStickers/hair4.png'),
  },
  {
    id:5,
    sticker:require('../assets/images/HairStickers/hair5.png'),
  },
  {
    id:6,
    sticker:require('../assets/images/HairStickers/hair6.png'),
  },
  {
    id:7,
    sticker:require('../assets/images/HairStickers/hair7.png'),
  },
  {
    id:8,
    sticker:require('../assets/images/HairStickers/hair8.png'),
  },
  {
    id:9,
    sticker:require('../assets/images/HairStickers/hair9.png'),
  },
  {
    id:10,
    sticker:require('../assets/images/HairStickers/hair10.png'),
  },
  {
    id:11,
    sticker:require('../assets/images/HairStickers/beard1.png'),
  },
  {
    id:12,
    sticker:require('../assets/images/HairStickers/beard2.png'),
  },
  {
    id:13,
    sticker:require('../assets/images/HairStickers/beard3.png'),
  },

]

export const radio_props = [
  { label: '8:30 AM', value: '8:30 AM' },
  { label: '9:30 AM', value: '9:30 AM' },
  { label: '10:30 AM', value: '10:30 AM' },
  { label: '11:30 AM', value: '11:30 AM' },
  { label: '12:30 PM', value: '12:30 PM' },
  { label: '1:30 PM', value: '1:30 PM' },
  { label: '2:30 PM', value: '2:30 PM' },
  { label: '3:30 PM', value: '3:30 PM' },
  { label: '4:30 PM', value: '4:30 PM' },
  { label: '5:30 PM', value: '5:30 PM' },
  { label: '6:30 PM', value: '6:30 PM' },
  { label: '7:30 PM', value: '7:30 PM' },
  { label: '8:30 PM', value: '8:30 PM' },
  { label: '9:30 PM', value: '9:30 PM' },
  { label: '10:30 PM', value: '10:30 PM' },


];


