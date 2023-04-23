import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AppointmentList from './AppointmentList';
import { GetAppointmentByStatus } from '../../../../api/Barber/Appointments';
import { COLORS as color } from '../../../../constants/GlobalConstants';
import Loader from '../../../../UI/Loader';
const BookedAppointments = ({ salon_id, status}) => {
    const [appointments, setAppointments] = useState([]);
    const [message, setMessage] = useState('');
  
    useEffect(() => {
        const getAppointments = async () => {
            try {
                const response = await GetAppointmentByStatus("appointment", "getByStatus", salon_id, status);
                if (Array.isArray(response)) {
                    setAppointments(response);
                }
                else if(response === 0){
                    setMessage(`No ${status} Appointments`);
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
        <View>
        {
            appointments.length > 0 ?  (
              <AppointmentList appointments={appointments} />
            )
            : message !== "" ?
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:color.black}}>{message}</Text>
            </View>
            :
            <Loader />
          }
        </View>
    )
}

export default BookedAppointments;
