import React, { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import AppointmentList from './AppointmentList';
import { GetAppointments } from '../../../api/SalonRequests';
import Loader from '../../../UI/Loader';
import { AuthContext } from '../../Auth/AuthContent';
const Appointments = ({ navigation, route }) => {
  const { loggedInUserId } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await GetAppointments("appointment", "get", loggedInUserId);
        if(response){
          setAppointments(response);
        }
        else{
          setError('No Booked Appointment');
        }

      } catch (error) {
        console.log(error);
      }
    }
    getAppointments();

    const interval = setInterval(() => {
      getAppointments();
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <View style={{ flex: 1 }}>
      {
        appointments.length > 0 ?  (
          <AppointmentList appointments={appointments} />
        ) :
        error !== '' ? 
        <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
          <Text style={{color:'#000'}}>{error}</Text> 
        </View> :
        <Loader/>
      }

    </View>
  )
}


export default Appointments;

