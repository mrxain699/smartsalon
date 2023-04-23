import React, {useEffect, useContext} from 'react'
import { View, StyleSheet,ScrollView } from 'react-native';
import { styles } from '../../../constants/Style';
import Buttons from './Buttons';
import SalonSpecialist from './SalonSpecialist';
import ListTabs from './ListTabs';


const Body = ({ salon_id, salon }) => {
  

  return (
    <View style={[styles.appBody, css.bodyContainer]}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Buttons salon={salon}/>
      <SalonSpecialist salon_id={salon_id} />
      <ListTabs salon_id={salon_id} salon={salon}/>
      </ScrollView>
    </View>
  )
}

const css = StyleSheet.create({
  bodyContainer: {
    flex: 4,
    marginTop: 0,
    paddingTop:0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }
})
export default Body;