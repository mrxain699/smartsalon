import React, { useContext, useEffect } from 'react'
import { SafeAreaView, StatusBar, PermissionsAndroid } from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Home from '../components/App/Home/Home';
import { styles } from '../constants/Style';
import { CustomModal } from '../UI/Modal';
import { AuthContext } from '../components/Auth/AuthContent';
import { AppContext } from '../components/App/AppContent';
const HomeScreen = ({ navigation }) => {
  const { setGPS } = useContext(AppContext);
  const { modalVisible, toggleModalHandler } = useContext(AuthContext);




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

  async function requestExternalStoragePermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
        if (
          granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('External storage permission granted');
        } else {
          console.log('External storage permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      console.log('External storage permission not required on this platform');
    }
  }



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

  useEffect(()=>{
    async function checkExternalStoragePermission() {
      if (Platform.OS === 'android') {
        try {
          const readPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          );
          const writePermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          );
          if (readPermission && writePermission) {
            console.log('External storage permission already granted');
          } else {
            requestExternalStoragePermission();
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        console.log('External storage permission not required on this platform');
      }
    }
    checkExternalStoragePermission();
  }, [])

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
      <Home navigation={navigation} />
    </SafeAreaView>
  )
}

export default HomeScreen