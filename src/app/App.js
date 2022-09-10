import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoardScreen from './screens/OnBoardScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

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

  }, []);

  return (
    isAppFirstLaunched != null && (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
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
      </Stack.Navigator>
    </NavigationContainer>
    )
  );
};



export default App;
