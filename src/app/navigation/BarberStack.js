import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import BarberTabs from './BarberTabs';
import { AuthContext } from '../components/Auth/AuthContent';
import ChatScreen from '../screens/Barber/ChatScreen';

const Stack = createNativeStackNavigator();

const BarberStack = () => {
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
            <Stack.Screen name="AppScreen" component={BarberTabs} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
          </Stack.Navigator>
    )
}

export default BarberStack;