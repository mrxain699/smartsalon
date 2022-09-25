import React, {useContext} from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS as color } from '../constants/GlobalConstants';
import { styles } from '../constants/Style';
import CustomIcon from '../UI/Icon';
import HomeScreen from '../screens/HomeScreen';
import StoreScreen from '../screens/StoreScreen';
import NearbyScreen from '../screens/NearbyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MakeOverScreen from '../screens/MakeOverScreen';
import AuthContext from '../components/Auth/AuthContent';


const Tabs = createBottomTabNavigator();


const tabBarIcons = (route, focused, size) => {
  let iconName;
  let rn = route.name;
  if(rn === "HomeScreen"){
    iconName = focused ? 'home' : 'home-outline';
  }
  else if(rn === "NearbyScreen"){
    iconName = focused ? 'location' : 'location-outline';
  }
  else if(rn === "StoreScreen"){
    iconName = focused ? 'basket' : 'basket-outline';
  }
  else if(rn === "ProfileScreen"){
    iconName = focused ? 'person' : 'person-outline';
  }
  return <CustomIcon name={iconName} size={size} color={color.orange} />

}

const screenOptions = ({route}) => ({
  headerShown:true,
  title: '',
  headerShadowVisible: false,
  headerTransparent:true,
  headerLeft: () => (
    <CustomIcon  name="menu-outline" size={36} color={color.white} style={styles.screenHeaderIconStyle}/>
  ),
  headerRight: () => (
    <CustomIcon  name="funnel-outline" size={24} color={color.white} style={styles.screenHeaderIconStyle} />
  ),
  showIcon:true,
  tabBarStyle:{
    ...styles.tabBarStyle,
  },
  tabBarIcon:({focused, size}) => {
    return tabBarIcons(route, focused, size)
  },
  tabBarActiveTintColor:color.orange
   
})






const Tab = () => {
  return (
      <Tabs.Navigator screenOptions={screenOptions}>
        <Tabs.Screen name="HomeScreen" component={HomeScreen} options={{
          tabBarLabel:'Home',
        }}/>
        <Tabs.Screen name="NearbyScreen" component={NearbyScreen} options={{
          tabBarLabel:'Nearby',
        }}/>

        <Tabs.Screen name="MakeOverScreen" component={MakeOverScreen} options={{
          tabBarIcon:({focused, size, }) => {
            return (<TouchableOpacity style={{
              top:-15,
            }}>
              <LinearGradient
              colors={[ color.orange100, color.orange]}
              start={{x: 0.5, y: 0}}
              end={{x: 1, y: 0.5}}
              style={{
                width:70,
                height:70,
                borderRadius:35,
              }}
              >
                <View style={{
                  width:'100%',
                  height:'100%',
                  borderRadius:100,
                  justifyContent:'center',
                  alignItems:'center',
                  overflow: 'hidden',
                }}>
                  <Image source={require('../assets/images/makeover.png')} resizeMode="contain"/>
                </View>
              </LinearGradient>
            </TouchableOpacity>)
          }
        }}/>
        <Tabs.Screen name="StoreScreen" component={StoreScreen} options={{
          tabBarLabel:'Store',
        }}/>
        <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{
          tabBarLabel:'Profile',
        }}/>
      </Tabs.Navigator>
  )
};


export default Tab;