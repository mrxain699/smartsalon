import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Header';
import Body from './Body';
import { GetSalon } from '../../../../api/Barber/Salon';
import { GetAppointments } from '../../../../api/SalonRequests';
import { AuthContext } from '../../../Auth/AuthContent';
import Loader from '../../../../UI/Loader';
import { COLORS as color } from '../../../../constants/GlobalConstants';
const Main = ({ navigation, route }) => {
    const { loggedInUserId } = useContext(AuthContext);
    const [salon, setSalon] = useState({});
    const [appointments, setAppointments] = useState([]);
    const [message, setMessage] = useState('');



    useEffect(() => {
        const get_salon = async () => {
            try {
                const response = await GetSalon("salon", "get", loggedInUserId);
                if (response != null) {
                    setSalon(response[0]);
                }
            } catch (error) {
                console.log(error);
            }
        }
        get_salon();
    }, []);

    useEffect(() => {
        const getAppointments = async () => {
            try {
                const response = await GetAppointments("appointment", "getTodayBooked", salon.id);
                if (Array.isArray(response)) {
                    setAppointments(response);
                }
                else if (response === 0) {
                    setMessage("No appointments for today");
                }
            } catch (error) {
                console.log("Appointment Error" + error);
            }
        }

        getAppointments();
        const interval = setInterval(() => {
            getAppointments();
        }, 1000);
        return () => clearInterval(interval);
    }, [salon]);

    return (
        <View style={styles.container}>
            <Header navigation={navigation} route={route} totalAppointments={appointments.length > 0 ? appointments.length : 0} />
            {
                appointments.length > 0 ?
                    <Body navigation={navigation} route={route} appointments={appointments} />
                    :
                    message !== "" ?  (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: color.black }}>{message}</Text>
                        </View>
                    )
                    :
                    <Loader />
            }

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default Main;

