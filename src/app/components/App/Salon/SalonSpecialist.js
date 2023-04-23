import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { COLORS as colors, REQUEST_URL} from '../../../constants/GlobalConstants';
import { AppContext } from '../AppContent';
import { title } from '../../../util/Functions';
import Loader from '../../../UI/Loader';
const Worker = ({ item }) => {
    return (
        <View style={css.workerContainer}>
            <View style={css.workerImage}>
                <Image source={{uri:REQUEST_URL+item.image}} style={css.image} />
            </View>
            <Text style={css.workerName}>{item.firstname ? title(item.firstname+" "+item.lastname):''}</Text>
        </View>
    )
}


const SalonSpecialist = ({salon_id}) => {
    const {workers, salonWorkers, errorMessage} = useContext(AppContext);
    useEffect(()=>{
        salonWorkers(salon_id);
    },[])

    return (
        <View style={css.barbersContainer}>
            <Text style={css.containerTitle}>Salon specialists</Text>
            <View style={css.workersContainer}>
            {
                workers.length > 0 ?  <FlatList
                data={workers}
                renderItem={({item})=><Worker item={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                
            /> :
            errorMessage != '' ? <Text style={{color:colors.grey700, marginLeft:10,}}>{errorMessage}</Text> :
            <Loader/>
            }
               
            </View>

        </View>
    )
}

const css = StyleSheet.create({
    barbersContainer: {
        width: '100%',
        paddingVertical: 5,
        backgroundColor:colors.grey500,
    },
    containerTitle: {
        fontSize: 16,
        color: colors.black,
        marginLeft:10,
    },
    workersContainer: {
        width: '100%',
    },
    workerContainer: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal:10,
    },
    workerImage: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.orange,
        padding: 3,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    workerName: {
        fontSize: 14,
        marginTop: 10,
        color: colors.grey800
    }

});

export default SalonSpecialist;