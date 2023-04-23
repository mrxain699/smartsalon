import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { COLORS as color } from '../constants/GlobalConstants'
const CheckInternetScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/offline.png')} />
            <Text style={styles.text}>Internet is not connected</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: color.grey700,
        fontSize:16,
        marginTop:20,
    }
});

export default CheckInternetScreen

