import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { COLORS as color } from '../../../../constants/GlobalConstants'
import { title } from '../../../../util/Functions';
import CustomIcon from '../../../../UI/Icon';
import Button from '../../../../UI/Button';
import { Booked, Canceled } from '../../../../api/Barber/Appointments';
import { AppContext } from '../../AppContent';
import Toast from 'react-native-toast-message';
const Item = ({ item }) => {
    const { isLoading, setIsLoading } = useContext(AppContext);
    const [isBooked, setIsBooked] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const onBookHandler = async () => {
        setIsLoading(true);
        setIsBooked(true);
        try {
            const response = await Booked("appointment", "booked", item.id);
            console.log(response);
            if (response > 0) {
                setIsLoading(false);
                setIsBooked(false);
                Toast.show({
                    type: 'success',
                    text1: 'Appointment booked successfully',
                });
            }
        } catch (error) {
            console.log(error);
        }
        console.log("Pressed");
    };

    const onCancelHandler = async () => {
        setIsLoading(true);
        setIsCancelled(true);
        try {
            const response = await Canceled("appointment", "cancelled", item.id);
            console.log(response);
            if (response > 0) {
                setIsLoading(false);
                setIsCancelled(false);
                Toast.show({
                    type: 'success',
                    text1: 'Appointment cancelled successfully',
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TouchableOpacity style={styles.itemContainer} key={item.key}>
            <View style={[styles.inner, { flexWrap: 'wrap' }]}>
                <CustomIcon name="person" size={18} color={color.orange} />
                <Text style={[styles.txtColor, { fontSize: 22, marginLeft: 8, }]}>{`${item.name && title(item.name)}`}</Text>
            </View>
            <View style={[styles.inner, { marginTop: 5, justifyContent: 'space-between' }]}>
                <View style={styles.inner}>
                    <CustomIcon name="call-outline" size={18} color={color.orange} />
                    <Text style={[styles.txtColor, { fontSize: 15, marginLeft: 10 }]}>{item.phone}</Text>
                </View>
                <Text style={[styles.txtColor]}><CustomIcon name="cash" size={15} color={color.orange} />  {`${item.total_price}`}</Text>
            </View>
            <View style={[styles.inner, { justifyContent: 'space-between', paddingLeft: 5, paddingTop: 5, flexWrap: 'wrap' }]}>
                <Text style={[styles.txtColor]}><CustomIcon name="calendar-outline" size={15} color={color.orange} />{`  ${item.date}`}</Text>
                <Text style={[styles.txtColor, { marginLeft: 8 }]}><CustomIcon name="time-outline" size={15} color={color.orange} />{`  ${item.time}`}</Text>
                <Text style={[styles.txtColor, { marginLeft: 8 }]}>
                    {
                        item.booked > 0 ?
                            <CustomIcon name="checkmark-circle" size={15} color={color.orange} /> :
                            item.cancelled > 0 ? <CustomIcon name="close-circle" size={15} color={color.orange} /> :
                                <Image source={require('../../../../assets/images/hourglass-14.png')} />
                    }
                    <Text>{item.booked > 0 ? 'Booked' : item.cancelled > 0 ? 'Cancelled' : 'Pending'}</Text>
                </Text>

            </View>
            {
                item.cancelled == 0 && item.booked == 0 ?
                    <View style={styles.btns}>
                        <Button text="Book" style={[styles.btn, { backgroundColor: color.white }]} state={item.booked > 0 ? true : false} onPress={() => {
                            onBookHandler()
                        }} loading={ isBooked && isLoading} />
                        <Button text="Cancel" style={styles.btn} onPress={() => {
                            onCancelHandler()
                        }} loading={isCancelled && isLoading} />
                    </View>
                    : ''
            }
            <Text style={[styles.txtColor, {marginLeft:8, marginTop:5}]}>{`Total Services: ${item.total_services}`}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: color.white,
        padding: 10,
        position: 'relative',
        overflow: 'hidden'
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtColor: {
        color: color.grey700,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
    },
    btn: {
        width: 120,
        borderRadius: 10,
        height: 40,
        marginHorizontal: 5,
    }



});
export default Item;

