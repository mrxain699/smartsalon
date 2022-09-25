import React from 'react'
import { SafeAreaView, StatusBar} from 'react-native';
import { height } from '../constants/GlobalConstants';
import Login from '../components/Auth/Login/Login';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Login navigation={navigation}/>
    </SafeAreaView>
  )
};

export default LoginScreen;