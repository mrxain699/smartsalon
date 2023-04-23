import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../constants/Style';
import Salon from '../components/App/Salon/Salon';
const SalonScreen = ({ route, navigation }) => {
  const salon = route.params?.item;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Salon navigation={navigation} salon={salon} />
    </SafeAreaView>
  )
}

export default SalonScreen;