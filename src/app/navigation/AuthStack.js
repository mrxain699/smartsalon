import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/SplashScreen';
import OnBoardScreen from '../screens/OnBoardScreen';
import UserRoleScreen from '../screens/UserRoleScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import VerifyOtpScreen from '../screens/VerifyOtpScreen';
import { AuthContext } from '../components/Auth/AuthContent';
import CustomIcon from '../UI/Icon';
import { COLORS as color } from '../constants/GlobalConstants';
import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const navigation = useNavigation();
  const {splashScreenMode, roleScreenMode, setRoleScreenMode} = useContext(AuthContext);
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  
  

  useEffect(() => {
    const checkIsAppFirstLaunched = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched');
      if (appData == null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem('isAppFirstLaunched', 'false');
      }
      else {
        setIsAppFirstLaunched(false);
      }
    }
    const checkuserole = async () => {
      const role = await AsyncStorage.getItem('role');
      if(role !== null){
        setRoleScreenMode(false);
      }
    } 
    checkIsAppFirstLaunched();
    checkuserole();
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);

  }, []);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      {showSplashScreen && splashScreenMode && (<Stack.Screen name="SplashScreen" component={SplashScreen} />)}
      {isAppFirstLaunched && (<Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />)}
      {roleScreenMode && (<Stack.Screen name="UserRoleScreen" component={UserRoleScreen} />)}
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
        headerShown: true,
        headerShadowVisible: false,
        headerTransparent: true,
        headerLeft: () => (
          <CustomIcon 
          name="arrow-back" size={26} 
          color={color.white} 
          style={{ marginLeft: 10, marginTop:10, }} 
          onPress={() =>{
            setRoleScreenMode(true);
            roleScreenMode && navigation.navigate('UserRoleScreen');

          }} />
        ),
        title: ''
      }}/>
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{
        headerShown: true,
        headerShadowVisible: false,
        title: ''
      }} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{
        headerShown: true,
        title: '',
        headerShadowVisible: false,
      }} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
      <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen}  />
    </Stack.Navigator>
  )
}

export default AuthStack;
