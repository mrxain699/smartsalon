import React, {useState, useEffect, useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/SplashScreen';
import OnBoardScreen from '../screens/OnBoardScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import VerifyOtpScreen from '../screens/VerifyOtpScreen';
import { AuthContext } from '../components/Auth/AuthContent';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const {splashMode} = useContext(AuthContext);
    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    
    useEffect(()=>{
        const checkIsAppFirstLaunched = async () => {
        const appData = await AsyncStorage.getItem('isAppFirstLaunched');
        if(appData == null){
            setIsAppFirstLaunched(true);
            AsyncStorage.setItem('isAppFirstLaunched', 'false');
        }
        else{
            setIsAppFirstLaunched(false);
        }
        }
        checkIsAppFirstLaunched();
    
        setTimeout(()=>{
        setShowSplashScreen(false);
        }, 5000);
    
    }, []);

  return (
    
    <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        {showSplashScreen && splashMode && (<Stack.Screen name="SplashScreen" component={SplashScreen} />)}
        {isAppFirstLaunched && (<Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />)}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{
          headerShown:true,
          headerShadowVisible: false,
          title:''
        }}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{
          headerShown:true,
          title: '',
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{
          headerShown:true,
          title: '',
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} options={{
          headerShown:true,
          headerShadowVisible: false,
          title:''
        }}/>
      </Stack.Navigator>
  )
}

export default AuthStack;
