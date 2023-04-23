import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS as colors } from '../../../constants/GlobalConstants';
import { title } from '../../../util/Functions';
import { getServicesType } from '../../../api/SalonRequests';
import { useNavigation } from '@react-navigation/native';
const ServiceCategory = ({ item }) => {
    const navigation = useNavigation();
    const [totalType, setTotalType] = useState(0);
    useEffect(() => {
        const totalServices = async () => {
            try {
                const response = await getServicesType("service", "getServicesType", item.category);
                if(response > 0){
                    setTotalType(response);
                }
                else{
                    setTotalType(-1);
                }

            }
            catch (error) {
                console.log(error);
            }
        }
        totalServices();
    }, []);

    return (
        <TouchableOpacity style={style.serviceItemContainer} onPress={()=>navigation.navigate('DisplayServicesScreen', {category:item.category, salon_id:item.salon_id})}>
            <Text style={style.serviceType}>{item.category && title(item.category)}</Text>
            <Text style={style.totalTypes}>
            {
                totalType > 1 ? `${totalType} types` :
                 totalType === 1 ? `${totalType} type` :
                 totalType === -1 ? `Coming Soon` : `Loading...`
            }
                </Text>

        </TouchableOpacity>
    )
}
const style = StyleSheet.create({
    serviceItemContainer: {
        width: '100%',
        height: 60,
        borderBottomWidth: 1,
        borderColor: colors.grey500,
        justifyContent: 'center',
    },
    serviceType: {
        fontSize: 15,
        color: colors.black
    },
    totalTypes: {
        fontSize: 13,
        color: colors.grey100,
    }
});
export default ServiceCategory;

