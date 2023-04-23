import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Tab from './Tab';
import MakeOverScreen from '../screens/MakeOverScreen';
import SalonScreen from '../screens/SalonScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';
import DisplayServicesScreen from '../screens/DisplayServicesScreen';
import ProductScreen from '../screens/ProductScreen';
import { AuthContext } from '../components/Auth/AuthContent';
import { COLORS as color } from '../constants/GlobalConstants';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { splashMode } = useContext(AuthContext);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (

    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      {showSplashScreen && splashMode && (<Stack.Screen name="SplashScreen" component={SplashScreen} />)}
      
      <Stack.Screen name="AppScreen" component={Tab} />
      <Stack.Screen name="MakeOverScreen" component={MakeOverScreen} />
      <Stack.Screen name="SalonScreen" component={SalonScreen} options={{
        headerShown: true,
        headerShadowVisible: false,
        headerTransparent: true,
        headerTintColor: '#fff',
        headerTitle: '',
      }} />
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} options={{
        headerShown: true,
        headerTintColor: color.black,
        headerTitle: 'Book Appointment',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} options={{
        headerShown: true,
        headerTintColor: color.black,
        headerTitle: 'Book Appointment',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={{
        headerShown: true,
        headerTintColor: color.black,
        headerTitle: 'Messages',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} options={{
        headerShown: true,
        headerTintColor: color.black,
        headerTitle: 'Products',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      <Stack.Screen name="DisplayServicesScreen" component={DisplayServicesScreen} options={{
        headerShown: true,
        headerTintColor: color.black,
        headerTitle: 'Services',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>

    </Stack.Navigator>
  )
}

export default AppStack;