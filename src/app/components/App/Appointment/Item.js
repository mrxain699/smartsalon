import React, {useContext} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { COLORS as color } from '../../../constants/GlobalConstants'
import { title } from '../../../util/Functions';
import CustomIcon from '../../../UI/Icon';
import Button from '../../../UI/Button';
import { Canceled } from '../../../api/Barber/Appointments';
import { AppContext } from '../AppContent';
import Toast from 'react-native-toast-message';
const Item = ({ item }) => {
    const {isLoading, setIsLoading} = useContext(AppContext);

    const onCancelHandler = async () => {
        setIsLoading(true);
        try {
            const response = await Canceled("appointment", "cancelled", item.id);
            if(response > 0){
                setIsLoading(false);
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
        <View style={styles.itemContainer} key={item.key}>
            <View style={[styles.inner, { flexWrap: 'wrap' }]}>
                <Image source={require('../../../assets/images/salon_24_org.png')} />
                <Text style={[styles.txtColor, { fontSize: 22, marginLeft: 8, }]}>{`${item.name && title(item.name)}`}</Text>
            </View>
            <View style={[styles.inner, { marginTop: 5 }]}>
                <Image source={require('../../../assets/images/marker_24_org.png')} />
                <Text style={[styles.txtColor, { fontSize: 14, marginLeft: 10, textAlign: 'justify', flexGrow: 1, flexWrap: 'wrap' }]}>{`${item.address}, ${item.city}`}</Text>
            </View>
            <View style={[styles.inner, { justifyContent: 'space-between', paddingLeft: 5, paddingTop: 5, flexWrap: 'wrap' }]}>
                <Text style={[styles.txtColor]}><CustomIcon name="calendar-outline" size={15} color={color.orange} />{`  ${item.date}`}</Text>
                <Text style={[styles.txtColor, { marginLeft: 8 }]}><CustomIcon name="time-outline" size={15} color={color.orange} />{`  ${item.time}`}</Text>
                <Text style={[styles.txtColor, { marginLeft: 8 }]}>
                {
                    item.booked > 0 ?
                        <CustomIcon name="checkmark-circle" size={15} color={color.orange} /> :
                        item.cancelled > 0 ? <CustomIcon name="close-circle" size={15} color={color.orange} /> :
                            <Image source={require('../../../assets/images/hourglass-14.png')} />
                }
                <Text>{item.booked > 0 ? 'Booked' : item.cancelled > 0 ? 'Cancelled' : 'Pending'}</Text>
                </Text>
            </View>
            <Text style={[styles.txtColor, {marginLeft:8, marginTop:5}]}>{`Total Services: ${item.total_services}`}</Text>
            <Text style={[styles.txtColor, {marginLeft:8, marginTop:2}]}>{`Total Bill: ${item.total_price}`}</Text>
            {
                item.cancelled == 0 ? <Button text="Cancel" style={styles.btn} onPress={()=>onCancelHandler()} loading={isLoading}/>: ''
            }
            </View>
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        height: 150,
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
        position:'relative',
        overflow:'hidden'
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtColor: {
        color: color.grey700,
    },
    btn:{
        position:'absolute',
        bottom:-12,
        right:-20,
        width:100,
        borderRadius:10,
        borderBottomLeftRadius:0,
        
    }


});
export default Item;

