import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import {styles} from '../../../constants/Style';
import Item from './Item';
const SalonList = ({title, salons}) => {
    const renderItem = ({item}) => {
        return (
          <Item item={item} />
        )
    }
  return (
    <View style={styles.nearbyListContainer}>
        <View style={styles.titleConatiner}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.viewBtnText}>View all</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
            <FlatList
            data={salons}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={{height:180, paddingLeft:20, paddingVertical:5}}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    </View>
  )
};

export default SalonList;
