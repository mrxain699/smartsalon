import React, {useContext, useEffect} from 'react';
import { View } from 'react-native';
import { styles as css } from '../../../constants/Style';
import Header from './Header';
import Body from './Body';
const Profile = ({ navigation }) => {
  return (
    <View style={css.container}>
      <Header navigation={navigation} />
      <Body navigation={navigation} />
    </View>
  )
}

export default Profile;