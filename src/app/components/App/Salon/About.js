import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { styles } from '../../../constants/Style';
import { COLORS as colors } from '../../../constants/GlobalConstants';
import Button from '../../../UI/Button';
import { useNavigation } from '@react-navigation/native';
;
const About = ({salon}) => {
    const navigation = useNavigation();

    const goToServiceScreen = () => {
        navigation.navigate('ServicesScreen', {salon_id:salon.id});
    }
    return (
        <View style={styles.tabsComponentContainer}>
            <Text style={styles.tabsComponentTitle}>About</Text>
            <Text style={css.aboutPara}>
               {salon.about != '' && salon.about != null ? salon.about : `No detail added yet` }
            </Text>
            <Text style={[styles.tabsComponentTitle, { marginTop: 5 }]}>Opening Hours</Text>
            <Text style={[css.hourse]}>{salon.open_time !=null && salon.close_time != null ? `${salon.open_time} - ${salon.close_time}` : `Not mention yet`}</Text>
            <Button text="Book Appointment" style={css.btn} onPress={goToServiceScreen}/>
        </View>
    )
}
const css = StyleSheet.create({
    aboutPara: {
        fontSize: 14,
        color: colors.grey100,
        marginTop: 5,
        textAlign: 'justify'
    },
    hourse: {
        marginTop: 5,
        fontSize: 14,
        color:colors.grey50
    },
    btn:{
        marginTop: 20,
    }

});
export default About;