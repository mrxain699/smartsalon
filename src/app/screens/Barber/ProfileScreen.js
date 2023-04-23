import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import { styles as css} from '../../constants/Style';
import Profile from '../../components/App/Barber/Profile/Profile';
const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={css.container}>
      <StatusBar translucent={true} backgroundColor="black" />
      <Profile navigation={navigation} route={route} />
    </SafeAreaView>
  )
};

export default ProfileScreen;
