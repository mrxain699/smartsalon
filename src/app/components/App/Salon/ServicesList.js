import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { COLORS as color } from '../../../constants/GlobalConstants';
import { getSalonServices } from '../../../api/SalonRequests';
import Loader from '../../../UI/Loader';


const Service = ({item, index}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.counter}>
                <Text style={styles.counterText}>{index + 1}</Text>
            </View>
            <Text style={styles.service}>{item.name}</Text>
        </View>
    )
}

const ServicesList = ({ navigation, route }) => {
    const { category, salon_id } = route.params;
    const [services, setServices] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getServices = async () => {
            try {
                const response = await getSalonServices("service", "getSalonServices", category, salon_id);
                if (response) {
                    setServices(response)
                }
                else {
                    setError("No Services Found");
                }

            } catch (error) {
                console.log(error);
            }
        }
        getServices();
    }, []);

    return (
        <View style={styles.container}>
        {
            services.length > 0 ?
            <FlatList
                data={services}
                renderItem={({ item, index }) => <Service item={item} index={index} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            /> :
            error != "" ? <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}><Text style={{color:color.grey700}}>{error}</Text></View> :
            <View style={{marginTop:10}}>
                <Loader/>
            </View>
        }
            

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        height: 70,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: color.grey500
    },
    counter: {
        width: 20,
        height: 20,
        backgroundColor: color.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 2,
    },
    counterText: {
        color: color.white,
        fontSize: 12,
    },
    service: {
        color: color.grey700,
        fontSize: 18,
        marginLeft: 10,
    }
});
export default ServicesList;

