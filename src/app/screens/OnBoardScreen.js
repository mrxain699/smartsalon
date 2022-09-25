import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import OnBoard from '../components/OnBoard/OnBoard';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar hidden={true}/>
      <OnBoard navigation={navigation}/>
    </SafeAreaView>
  )
};

export default OnBoardScreen;
