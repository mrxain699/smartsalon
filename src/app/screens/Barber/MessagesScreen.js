import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../../constants/Style';
import { COLORS as color } from '../../constants/GlobalConstants';
import Messages from '../../components/App/Barber/Chats/Messages';

const MessagesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} backgroundColor={color.black} />
      <Messages navigation={navigation}/>
    </SafeAreaView>
  )
}

export default MessagesScreen;
