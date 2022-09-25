import React from 'react';
import { View } from 'react-native';
import CustomModal from '../../CustomModal';
import Header from './Header';
import Body from './Body';
import { styles } from '../../../constants/Style';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  )
};

export default Home;