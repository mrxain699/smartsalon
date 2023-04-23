import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS as color } from '../constants/GlobalConstants';
import { styles } from '../constants/Style';
import CustomIcon from '../UI/Icon';
import MainScreen from '../screens/Barber/MainScreen';
import AppointmentsScreen from '../screens/Barber/AppointmentsScreen';
import ProfileScreen from '../screens/Barber/ProfileScreen';
import MessagesScreen from '../screens/Barber/MessagesScreen';


const Tabs = createBottomTabNavigator();


const tabBarIcons = (route, focused, size) => {
    let iconName;
    let rn = route.name;
    if (rn === "MainScreen") {
        iconName = focused ? 'home' : 'home-outline';
    }
    else if (rn === "AppointmentsScreen") {
        iconName = focused ? 'calendar' : 'calendar-outline';
    }
    else if(rn === "MessagesScreen"){
        iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
    }
    else if (rn === "ProfileScreen") {
        iconName = focused ? 'person' : 'person-outline';
    }
    return <CustomIcon name={iconName} size={size} color={color.orange} />

}

const screenOptions = ({ route, navigation }) => ({
    headerShown: true,
    headerShadowVisible: true,
    headerTransparent: false,
    showIcon: true,
    tabBarStyle: {
        ...styles.tabBarStyle,
    },

    tabBarIcon: ({ focused, size }) => {
        return tabBarIcons(route, focused, size)
    },
    tabBarActiveTintColor: color.orange

})


const BarberTabs = ({ navigation }) => {
    return (
        <Tabs.Navigator screenOptions={screenOptions}>
            <Tabs.Screen name="MainScreen" component={MainScreen} options={{
                tabBarLabel: 'Home',
                headerShown: false,
                headerShadowVisible: false,
                headerTransparent: true,

            }} />
            <Tabs.Screen name="AppointmentsScreen" component={AppointmentsScreen} options={{
                tabBarLabel: 'Appointments',
                title: 'Appointments',
            }} />
            <Tabs.Screen name="MessagesScreen" component={MessagesScreen} options={{
                tabBarLabel: 'Messages',
                title: 'Messages',
            }} />

            <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{
                tabBarLabel: 'Profile',
                title: 'Profile',
                headerShown: false,
                headerShadowVisible: false,
                headerTransparent: true,
            }} />
        </Tabs.Navigator>
    )
};


export default BarberTabs;