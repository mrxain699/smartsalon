import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../../../UI/Icon';
import { COLORS as colors } from '../../../constants/GlobalConstants';
const Buttons = ({salon}) => {
    const navigation = useNavigation();
    return (
        <View style={css.btnContainer}>
            <Pressable style={css.buttons} onPress={()=>{navigation.navigate('ChatScreen', {salon:salon})}}>
                <CustomIcon name="chatbubble-ellipses" size={20} color={colors.orange} style={css.icon} />
                <Text style={[css.btnText,{color:colors.grey50}]}>Message</Text>
            </Pressable>
            <Pressable style={[css.buttons, {backgroundColor:colors.orange}]} onPress={()=>{navigation.navigate('ProductScreen', {salon:salon})}}>
                <CustomIcon name="basket" size={24} color={colors.white} style={css.icon} />
                <Text style={[css.btnText,{color:colors.white}]}>Store</Text>
            </Pressable>
        </View>
    )
}
const css = StyleSheet.create({
    btnContainer: {
        width: '100%',
        height: 70,
        paddingTop:5,
        paddingHorizontal:15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.grey500,

    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        borderWidth: 2,
        borderColor: colors.orange,
        borderRadius: 10,
        marginHorizontal:10,
        paddingHorizontal:30
    },
    linearButton: {
        borderRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 12,
        marginLeft: 10,
        color: colors.white,
    },
    icon: {
        marginLeft: 10,

    },
    btnText: {
        fontSize: 16,
        marginLeft: 5,
    }
})


export default Buttons;