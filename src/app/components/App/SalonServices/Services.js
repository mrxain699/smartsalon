import React, { useState, useEffect, useCallback, useContext } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { height, COLORS as color } from '../../../constants/GlobalConstants';
import ServicesDropDown from './ServicesDropDown';
import Button from '../../../UI/Button';
import { getSalonCategories } from '../../../api/SalonRequests';
import { AppContext } from '../AppContent';
import Loader from '../../../UI/Loader';
import Toast from 'react-native-toast-message';

const Services = ({ navigation, route }) => {
    const {selectedServices, servicePrice, toastType, setToastType, toastMessage, setToastMessage} = useContext(AppContext);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const { salon_id } = route.params;

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await getSalonCategories("category", "getCategories", salon_id);
                if(response != null){
                    setCategories(response);
                }
                else{
                    setError('No Services Found');
                }

            }
            catch (err) {
                console.log(err);
            }
        }
        getCategories();

    }, []);

    

    const goNext = () => {
        if(selectedServices.length > 0){
            navigation.navigate('ScheduleScreen', {services:selectedServices, salon_id:salon_id})
        }
        else{
            Toast.show({
                type: 'error',
                text1: 'Please select the services',
            });

        }
       
    }

 


    return (
        <View style={styles.container}>
            <View style={styles.serviceHeading}>
                <Text style={styles.text}>Choose Your Service</Text>
                <Text style={styles.text}>Total: {servicePrice}</Text>
            </View>
            <View style={styles.servicesContainer}>
                <ScrollView style={{ height: 100 }} contentContainerStyle={{ paddingTop: 10 }} showsVerticalScrollIndicator={false}>
                    {
                        categories.length > 0 ?
                        categories.map((e, i) => (
                            <View style={styles.serviceItemsContainer} key={i}>
                                <Text style={styles.category}>{e.category}</Text>
                                <ServicesDropDown category={e.category} salon_id={e.salon_id} index={i} />
                            </View>
                        )) :
                        error != '' ? <Text style={{color:color.grey700}}>{error}</Text> :
                        <Loader/>

                    }
                </ScrollView>
            </View>
            <Button text="Continue" style={styles.nextBtn} onPress={() => goNext()} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    servicesContainer: {
        height: (height / 2) + 50,
    },
    serviceHeading: {
        marginTop: 20,
        marginHorizontal: 15,
        borderRadius: 20,
        borderColor: color.orange,
        borderWidth: 2,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 15,
        color: color.black,
    },
    totalText: {
        fontSize: 15,
        color: color.black,
    },
    serviceItemsContainer: {
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'visible',

    },
    category: {
        fontSize: 16,
        color: color.black
    },
    nextBtn: {
        marginHorizontal: 30,
        marginTop: 30,
    },


});

export default Services;