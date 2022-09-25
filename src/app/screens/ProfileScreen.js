import React, {useContext} from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import {styles} from '../constants/Style';
import Button from '../UI/Button';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../components/Auth/AuthContent';
const ProfileScreen = () => {
  const {logoutUser} = useContext(AuthContext);
  
  return (
      <SafeAreaView style={styles.container}>
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <Button text="Logout" style={{width:100}} onPress={logoutUser}/>
      </View>
      </SafeAreaView>
  )
};

export default ProfileScreen;
