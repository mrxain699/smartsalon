import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import Profile from '../components/App/Profile/Profile';
import { styles as css} from '../constants/Style';

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={css.container}>
      <StatusBar translucent={true} backgroundColor="black" />
      <Profile navigation={navigation} />
    </SafeAreaView>
  )
};

export default ProfileScreen;
