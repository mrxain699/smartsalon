import React, {useState, useEffect, useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Tab from './Tab';
import { AuthContext } from '../components/Auth/AuthContent';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const {splashMode} = useContext(AuthContext);
  const [showSplashScreen, setShowSplashScreen] = useState(true);
    
  useEffect(()=>{
      setTimeout(()=>{
      setShowSplashScreen(false);
      }, 5000);
  }, []);
    
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
    }}>
      {showSplashScreen && splashMode && (<Stack.Screen name="SplashScreen" component={SplashScreen} />)}
      <Stack.Screen name="AppScreen" component={Tab} />
    </Stack.Navigator>
  )
}

export default AppStack;