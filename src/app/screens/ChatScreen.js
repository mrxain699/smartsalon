import React, { useEffect } from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../constants/Style';
import { COLORS as color } from '../constants/GlobalConstants';
import Chat from '../components/App/Message/Chat';

const ChatScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={color.black} />
      <Chat navigation={navigation} salon={route.params.salon}/>
    </SafeAreaView>
  )
}

export default ChatScreen;
