import React from 'react';
import {SafeAreaView} from 'react-native';
import OnBoard from '../components/OnBoard/OnBoard';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <OnBoard navigation={navigation}/>
    </SafeAreaView>
  )
};

export default OnBoardScreen;
