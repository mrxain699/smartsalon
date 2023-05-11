import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { REQUEST_URL } from '../../../constants/GlobalConstants';


const Product = ({products}) => {

  return (
    <View style={{flex:1, paddingHorizontal:40, paddingVertical:20,}} >
      <ScrollView style={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      {
        products.map((e, i) => (
          <View style={styles.itemContainer} key={i*i}>
      <Image source={{uri:REQUEST_URL+e.image}} style={styles.itemImage}/>
      <Text>Name : {e.name}</Text>
      <Text>Price : {e.price}</Text>
      <Text>Description : {e.p_desc}</Text>
    </View>
        ))
      }
          
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer:{
    height:400,
    borderRadius:15,
  },
  itemImage:{
    height:300,
    width:'100%',
    
  }


});

export default Product

