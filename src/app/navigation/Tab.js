import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS as color } from '../constants/GlobalConstants';
import { styles } from '../constants/Style';
import CustomIcon from '../UI/Icon';
import HomeScreen from '../screens/HomeScreen';
import NearbyScreen from '../screens/NearbyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MakeOverScreen from '../screens/MakeOverScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import MessagesScreen from '../screens/MessagesScreen';



const Tabs = createBottomTabNavigator();


const tabBarIcons = (route, focused, size) => {
  let iconName;
  let rn = route.name;
  if (rn === "HomeScreen") {
    iconName = focused ? 'home' : 'home-outline';
  }
  else if (rn === "NearbyScreen") {
    iconName = focused ? 'location' : 'location-outline';
  }
  else if (rn === "AppointmentsScreen") {
    iconName = focused ? 'calendar' : 'calendar-outline';
  }
  else if (rn === "ProfileScreen") {
    iconName = focused ? 'person' : 'person-outline';
  }
  else if (rn === "MakeOverScreen") {
    return <LinearGradient
      colors={[color.orange100, color.orange]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 1, y: 0.5 }}
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        top: -15,
        backgroundColor: color.orange
      }}
    >
      <View style={{
        width: '100%',
        height: '100%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <Image source={require('../assets/images/home.png')} resizeMode="contain" />
      </View>
    </LinearGradient>

  }
  return <CustomIcon name={iconName} size={size} color={color.orange} />

}

const screenOptions = ({ route, navigation }) => {
  return {
    headerShown: true,
    title: '',
    headerShadowVisible: false,
    headerTransparent: true,
    headerRight: () => (
      <CustomIcon name="chatbubble-ellipses-outline" size={24} color={color.white} style={{ marginRight: 20 }} onPress={() => navigation.navigate('MessagesScreen')} />
    ),
    showIcon: true,
    tabBarStyle: {
      ...styles.tabBarStyle,
    },
    tabBarIcon: ({ focused, size }) => {
      return tabBarIcons(route, focused, size)
    },
    tabBarActiveTintColor: color.orange,
    tabBarStyle: { display: 'flex' },

  }
}






const Tab = ({ navigation, route }) => {

  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen name="HomeScreen" component={HomeScreen} options={{
        tabBarLabel: 'Home',
      }} />
      <Tabs.Screen name="NearbyScreen" component={NearbyScreen} options={{
        tabBarLabel: 'Nearby',
      }} />

      <Tabs.Screen name="MakeOverScreen" component={MakeOverScreen} options={{
        tabBarLabel: '',
        title: 'MakeOver',
        headerShadowVisible: true,
        headerTransparent: false,
        tabBarStyle:{display:'none'},
        headerLeft: () => (
          <CustomIcon name="arrow-back" size={24} color={color.black} style={{ marginLeft: 15, marginTop: 3 }} onPress={() => navigation.goBack()} />
        ),
        
        
      }} />

      <Tabs.Screen name="AppointmentsScreen" component={AppointmentsScreen} options={{
        tabBarLabel: 'Appointments',
        title: 'Appointments',
        headerShadowVisible: true,
        headerTransparent: false,
        headerLeft: () => (
          <CustomIcon name="arrow-back" size={24} color={color.black} style={{ marginLeft: 15 }} onPress={() => navigation.goBack()} />
        ),
      }} />
      

      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{
        tabBarLabel: 'Profile',
      }} />
    </Tabs.Navigator>
  )
};

const style = StyleSheet.create({
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icons: {
    marginRight: 15,
  }
});

export default Tab;