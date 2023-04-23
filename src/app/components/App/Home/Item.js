import React, { useContext, useEffect } from 'react';
import { View, ImageBackground, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../../constants/Style';
import { COLORS as color, REQUEST_URL } from '../../../constants/GlobalConstants';
import LinearGradient from 'react-native-linear-gradient';
import { title } from '../../../util/Functions';
const Item = ({ item }) => {
    
    const navigation = useNavigation();
    return (
        <Pressable style={styles.itemView}
            onPress={() => {
                navigation.navigate("SalonScreen", { item: item })
            }}
            
        >
            <ImageBackground source={{ uri: REQUEST_URL + item.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', }}>
                <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']} style={{ width: '100%', height: '100%' }}>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'flex-end', paddingHorizontal: 10, paddingBottom: 20, position: 'relative' }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: color.white, fontSize: 18, fontWeight: 'bold' }}>{item.name ? title(item.name) : ''}</Text>
                        </View>
                        <Text style={{ color: color.white, width: '100%' }}>{item.address}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    )
}

export default Item;
