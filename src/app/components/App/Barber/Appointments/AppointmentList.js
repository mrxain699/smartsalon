import React from 'react'
import { FlatList } from 'react-native';
import Item from './Item';
const AppointmentList = ({ appointments }) => {
    const renderItem = ({ item }) => {
        return (
            <Item item={item} />
        )
    }
    return (
        <FlatList
            data={appointments}
            renderItem={renderItem}
            
        />
    )
}

export default AppointmentList;

