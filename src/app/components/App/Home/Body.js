import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import {styles} from '../../../constants/Style';
import { salons } from '../../../constants/GlobalConstants';
import SalonList from './SalonList';
const Body = () => {
  return (
      <View style={styles.homeBody}>
        <ScrollView style={{flexGrow:1}} showsVerticalScrollIndicator={false}>
          <SalonList title="Nearby Salon" salons={salons} />
          <SalonList title="Popular Salon" salons={salons} />
        </ScrollView>
      </View>
  )
};

export default Body;