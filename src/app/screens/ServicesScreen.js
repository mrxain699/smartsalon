import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../constants/Style';
import { COLORS as color } from '../constants/GlobalConstants';
import Services from '../components/App/SalonServices/Services';
const ServicesScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={color.black} />
      <Services navigation={navigation} route={route}/>
    </SafeAreaView>
  )
}

export default ServicesScreen;