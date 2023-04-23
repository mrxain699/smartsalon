import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS as color } from '../../../../constants/GlobalConstants';
import AppointmentList from '../Appointments/AppointmentList';
const Body = ({ navigation, route, appointments }) => {
  return (
    <View style={styles.body}>
      <View style={styles.appList}>
        <AppointmentList appointments={appointments} />
      </View>
      <View style={styles.bottomDivider}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    backgroundColor: color.white,
  },
  appList: {
    paddingHorizontal: 10,
  },

})

export default Body

