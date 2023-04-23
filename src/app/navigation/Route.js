import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import BarberStack from './BarberStack';
import CheckInternetScreen from '../screens/CheckInternetScreen';
import { AuthContext } from '../components/Auth/AuthContent';
import { getUserRole, isUserLoggedIn } from '../util/Functions';

const Stack = createNativeStackNavigator();

const Route = () => {
    const {isLoggedIn, setLoggedInUserId} = useContext(AuthContext);
    const [userRole, setUserRole] = useState('');
    const [isLogin, setIsLogin] = useState("false");
    const [isConnected, seIsConnected] = useState(false);

    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(state => {
            seIsConnected(state.isConnected);
          });
          
          return () => {
            unsubscribe();
          }
    }, []);

    useEffect(() => {
        const user = async () => {
            try {
                const user_id = await AsyncStorage.getItem('user_id');
                if (user_id !== null) {
                    setLoggedInUserId(user_id);
                }
            } catch (error) {
                console.log(error);
            }
        }
        user();
    }, []);


    useEffect(() => {
        const getRole = async () => {
            try {
                const role = await getUserRole();
                if (role !== null) {
                    setUserRole(role);
                }
            } catch (error) {
                console.log(error);
            }

        }
        getRole();
    }, [isLoggedIn]);

    useEffect(() => {
        const loggedIn = async () => {
            try {
                const is_loggin = await isUserLoggedIn();
                if (is_loggin !== null) {
                    setIsLogin(is_loggin);
                }
            } catch (error) {
                console.log(error);
            }

        }
        loggedIn();
    }, [isLoggedIn]);


    return (
        <NavigationContainer>
            {
                isConnected ? 
                (userRole === "customer" && isLogin === "true") ? <AppStack /> 
                : (userRole === "barber" && isLogin === "true") ? <BarberStack/> 
                : <AuthStack />
                :
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="CheckInternetScreen" component={CheckInternetScreen} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    )

};



export default Route;
