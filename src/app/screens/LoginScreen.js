import React from 'react'
import { SafeAreaView, StatusBar} from 'react-native';
import Login from '../components/Auth/Login/Login';

const LoginScreen = ({navigation, route}) => {
  const role = route?.params?.role;
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Login navigation={navigation} role={role && role}/>
    </SafeAreaView>
  )
};

export default LoginScreen;