import React, { useContext, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { COLORS  as color } from '../../../constants/GlobalConstants';
import { styles } from '../../../constants/Style';
import Item from './Item';
import { AppContext } from '../AppContent';
import { AuthContext } from '../../Auth/AuthContent';
import Loader from '../../../UI/Loader';
const Body = () => {
  const { salons, all_salons, errorMessage } = useContext(AppContext);
  const { loggedInUserId } = useContext(AuthContext);
  useEffect(() => {
    all_salons(loggedInUserId);
    const interval = setInterval(() => {
      all_salons(loggedInUserId);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const renderItem = ({ item }) => {
    return (
      <Item item={item} key={item.id * item.id}/>
    )
  }
  return (
    <View style={styles.appBody}>
      <View style={styles.titleConatiner}>
        <Text style={styles.title}>For You</Text>
      </View>
      <View style={{paddingVertical:5, paddingHorizontal:20}}>
      {
        all_salons.length > 0 ?
        <FlatList
        data={salons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      :
      errorMessage != "" ? <View style={{flex:1}}><Text style={{color:color.grey700}}>{errorMessage}</Text></View> : <Loader/>
      }

      </View>
    </View>
  )
};

export default Body;