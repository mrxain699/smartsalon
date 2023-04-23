import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../constants/Style';
import { COLORS as color } from '../constants/GlobalConstants';
import Appointment from '../components/App/Appointment/Appointment';
const SecheduleScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={color.black} />
      <Appointment navigation={navigation} route={route}/>
    </SafeAreaView>
  )
}

export default SecheduleScreen;