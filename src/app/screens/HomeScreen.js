import React, {useEffect} from 'react'
import { SafeAreaView, StatusBar, PermissionsAndroid} from 'react-native';
import Home from '../components/App/Home/Home';
import {styles} from '../constants/Style';
const HomeScreen = ({navigation}) => {

  useEffect(() =>{
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Enable Your Location",
            message:
              "Please allow to use your location " +
              "to show nearby services on the map.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the Location");
        } else {
          console.log("Location permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestCameraPermission();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Home navigation={navigation}/>
    </SafeAreaView>
  )
}

export default HomeScreen