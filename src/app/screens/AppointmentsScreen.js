import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../constants/Style';
import { COLORS as color } from '../constants/GlobalConstants';
import Appointments from '../components/App/Appointment/Appointments';

const AppointmentsScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={false} backgroundColor={color.black} />
            <Appointments navigation={navigation} route={route}/>
        </SafeAreaView>
    )
};

export default AppointmentsScreen;