import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { tabs, width, COLORS as colors } from '../../../constants/GlobalConstants';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Reviews from './Reviews';

const tab_width  = width / 4;
const ListTabs = ({salon_id, salon}) => {
    const [status, setStatus] = useState('About');
    const setStatusFilter = status => {
        setStatus(status);
    };
  return (
    <View style={css.tabsContainer}>
    
        <View style={css.listTabContainer}>
            {
                tabs.map((e, i)=>(
                    <TouchableOpacity 
                    style={[css.tabs, status === e.status && css.tabActive]} 
                    key={i*i}
                    onPress={() => setStatusFilter(e.status)}>
                        <Text style={css.tabText}>{e.status}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>

        {
            status === "About" 
            ? (<About salon={salon} />) : status === "Services" 
            ? (<Services salon_id={salon_id} />) : status === "Gallery" 
            ? (<Gallery salon_id={salon_id} />) : status === "Reviews" 
            ? (<Reviews salon_id={salon_id} />) : <About/>
        }

    </View>
  )
};

const css = StyleSheet.create({
    tabsContainer:{
        width:width,
        overflow:'hidden',
    }, 
    listTabContainer:{
        width:'100%',
        flexDirection:'row',
        backgroundColor:colors.grey500,
        
    },
    tabs:{
        width: tab_width,
        flexDirection:'row',
        padding:10,
        justifyContent:'center',

    },
    tabText:{
        fontSize:16,
        color:colors.grey50
    },
    tabActive:{
        borderBottomWidth:4,
        borderBottomColor:colors.orange,
        
    }
});

export default ListTabs