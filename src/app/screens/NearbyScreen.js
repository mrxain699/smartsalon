import React, { useContext, useEffect } from 'react';
import { SafeAreaView, StatusBar, PermissionsAndroid } from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {styles} from '../constants/Style';
import Nearby from '../components/App/Nearby/Nearby';
import { CustomModal } from '../UI/Modal';
import { AuthContext } from '../components/Auth/AuthContent';
import { AppContext } from '../components/App/AppContent';

const NearbyScreen = () => {
  const { modalVisible, toggleModalHandler } = useContext(AuthContext);
  const { setGPS } = useContext(AppContext);

  const enableGPS = async () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then((data) => {
        setGPS(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        enableGPS();
      } else {
        toggleModalHandler();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(response => {
      if (response === true) {
        enableGPS();
      }
      else if (response === false) {
        requestLocationPermission();
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <CustomModal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        image={require('../assets/images/marker.png')}
        title="Enable Your Location"
        message="Please allow to use your location to show nearby services on the map."
        btn="Done"
        onPress={() => {
          toggleModalHandler()
          requestLocationPermission()
        }}
      />
      <Nearby/>
    </SafeAreaView>
  )
};

export default NearbyScreen;
