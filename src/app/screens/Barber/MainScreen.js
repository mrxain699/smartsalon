import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../../constants/Style';
import { COLORS as color } from '../../constants/GlobalConstants';
import Main from '../../components/App/Barber/Main/Main';

const MainScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={color.black} />
      <Main navigation={navigation} route={route} />
    </SafeAreaView>
  )
}

export default MainScreen;
