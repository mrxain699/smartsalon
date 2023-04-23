import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS as colors } from '../../../../constants/GlobalConstants';
const Header = ({ navigation, route,  totalAppointments }) => {


    return (
        <View style={css.header}>
            <View style={css.title}>
                <Text style={{color:colors.grey700, fontSize:16}}>Today Appointments</Text>
                <Text style={{color:colors.grey700, fontSize:16}}>{totalAppointments}</Text>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    header: {
        height: 100,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
    },
    title:{
        borderRadius:50, 
        borderWidth:2, 
        borderColor:colors.orange, 
        paddingVertical:15, 
        paddingHorizontal:25, 
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
    },

});

export default Header

