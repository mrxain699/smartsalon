import React from 'react'
import { SafeAreaView} from 'react-native';
import Login from '../components/Auth/Login/Login';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Login navigation={navigation}/>
    </SafeAreaView>
  )
};

export default LoginScreen;