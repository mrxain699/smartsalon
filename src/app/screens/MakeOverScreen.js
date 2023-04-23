import React from 'react';
import { SafeAreaView,  Text, StatusBar } from 'react-native';
import {styles} from '../constants/Style';
import MakeOver from '../components/App/MakeOver/MakeOver';
const MakeOverScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar translucent={false} backgroundColor="#000" />
    <MakeOver navigation={navigation} route={route} />
    </SafeAreaView>
  )
};

export default MakeOverScreen;
