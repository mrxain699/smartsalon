import React, {useContext, useEffect} from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native';
import { COLORS as colors, width} from '../../../../constants/GlobalConstants';
import Item from './Item';
import {AuthContext} from '../../../Auth/AuthContent';
import Loader from '../../../../UI/Loader';
const Body = ({ navigation , route}) => {
    const {get_user, profile, logout, isLoading} = useContext(AuthContext);
    useEffect(()=>{
        get_user("barber");
    }, []);

    return (
        <ScrollView style={{flexGrow:1, zIndex:-1}} showsVerticalScrollIndicator={false}>
        {
            profile ?  
            <View style={styles.bodyContainer}>
            <Text style={styles.bodyHeading}>Manage</Text>
               <Item 
               navigation={navigation} 
               icon="person-outline" 
               text={profile.name.charAt(0).toUpperCase()+profile.name.slice(1)} 
               identifier="name" 
               placeholder="Name"
               updateIcon={true}
               />
               <Item 
               navigation={navigation} 
               icon="mail-outline" 
               text={profile.email}
               identifier="email" 
               placeholder="Email"
               updateIcon={true} 
               /> 
               <Item 
               navigation={navigation} 
               icon="call-outline" 
               text={profile.phone}
               identifier="phone" 
               placeholder="Phone"
               updateIcon={true} 
               /> 
               <Item 
               navigation={navigation} 
               icon="log-out-outline" 
               text="Logout"
               updateIcon={false}
               onPress={()=>logout()}
               onLoad={isLoading && isLoading} 
               />
               <View style={{height:80}}/> 
            </View>
            :
            <Loader/> 
        }
        </ScrollView>
       
    )
};

const styles = StyleSheet.create({
    bodyContainer:{
        width:width,
        height:'100%',
        paddingTop:80,
        paddingHorizontal:20,
        backgroundColor:colors.white,
        display:'flex',
        flexDirection: 'column',
        zIndex:-1,
    },
    bodyHeading:{
        fontSize:14,
        color:colors.grey100,
        marginBottom:15,
        marginLeft:5,
    }

});

export default Body;