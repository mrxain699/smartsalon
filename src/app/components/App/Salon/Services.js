import React, {useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import ServiceCategory from './ServiceCategory';
import { styles } from '../../../constants/Style';
import { AppContext } from '../AppContent';
import Loader from '../../../UI/Loader';


const Services = ({salon_id}) => {
    const {serviceCategories, salonServiceCategories, errorMessage} = useContext(AppContext);
    
    useEffect(()=>{
        salonServiceCategories(salon_id);
    }, []);

    return (
        <View style={styles.tabsComponentContainer}>
            <Text style={styles.tabsComponentTitle}>Services</Text>
            {
                serviceCategories.length > 0 ? 
                serviceCategories.map((e, i) => (
                    <ServiceCategory item={e} key={i*i} />
                )):
                errorMessage !== '' ? <Text style={{color:'#000'}}>{errorMessage}</Text> :
                <Loader/>
            }
        </View>
    )
}

export default Services;