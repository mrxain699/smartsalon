import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from '../constants/Style';
import ServicesList from '../components/App/Salon/ServicesList';
const DisplayServicesScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={false} backgroundColor="#000" />
            <ServicesList navigation={navigation} route={route}/>
        </SafeAreaView>
    )
};

export default DisplayServicesScreen;