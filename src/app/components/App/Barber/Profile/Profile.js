import React from 'react';
import { View } from 'react-native';
import { styles as css } from '../../../../constants/Style';
import Header from './Header';
import Body from './Body';
const Profile = ({ navigation, route}) => {
  return (
    <View style={css.container}>
      <Header navigation={navigation} route={route} />
      <Body navigation={navigation} route={route} />
    </View>
  )
}

export default Profile;