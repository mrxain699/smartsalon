import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GetSalon } from '../../../../api/Barber/Salon';
import ListTabs from './ListTabs';
import { AuthContext } from '../../../Auth/AuthContent';
const Appointments = () => {
  const {loggedInUserId}  = useContext(AuthContext);
  const [salon, setSalon] = useState({});



  useEffect(() => {
    const get_salon = async () => {
      try {
        const response = await GetSalon("salon", "get", loggedInUserId);
        if(Array.isArray(response)){
          setSalon(response[0]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    get_salon();
  }, []);

  return (
  
    <View style={styles.container}>
      {
        
        <ListTabs salon_id={salon.id}/>
        
      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Appointments

