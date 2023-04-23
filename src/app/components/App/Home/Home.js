import React from 'react';
import { View } from 'react-native';
import Header from '../Header';
import Body from './Body';
import { styles } from '../../../constants/Style';

const Home = ({navigation}) => {
  const style = {
    headerBar : {...styles.headerBar},
    headerTitle:{...styles.headerTitle}
  }
  
  return (
    <View style={styles.container}>
      <Header 
      image={require('../../../assets/images/homeheader.jpg')}
      style={style}
       />
      <Body navigation={navigation}/>
    </View>
  )
};

export default Home;