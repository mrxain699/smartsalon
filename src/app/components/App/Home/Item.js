import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import { styles } from '../../../constants/Style';
import { COLORS as color } from '../../../constants/GlobalConstants';
import LinearGradient from 'react-native-linear-gradient';
import Icon  from 'react-native-vector-icons/Ionicons.js';
const Item = ({item}) => {
  return (
    <View style={styles.itemView}>
        <ImageBackground source={item.image} style={{width:'100%', height:'100%', resizeMode:'cover', }}>
            <LinearGradient colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']} style={{width:'100%', height:'100%'}}>
                <View style={{width: '100%', height: '100%', justifyContent: 'flex-end', paddingHorizontal:10, paddingBottom:20, position: 'relative'}}>    
                    <View style={{width:'100%', flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
                        <Text style={{color:color.white, fontSize:18, fontWeight:'bold'}}>{item.name}</Text>
                        <Text style={{color:color.white}}>
                        <Icon name="star" color={color.orange}/> {item.rating}
                        </Text>
                    </View>
                    <Text style={{color:color.white, width:190}}>{item.address}</Text>
                    <LinearGradient
                    colors={[color.orange100,  color.orange]}
                    start={{x: 0.5, y: 0}}
                    end={{x: 1, y: 1}}
                    style={{position:'absolute', width:100, justifyContent:'center', alignItems: 'center', paddingVertical:12, borderRadius:10, right:-8, bottom:-5}}
                    >
                        <Pressable>
                            <Text style={{color:color.white}} >Book</Text>
                        </Pressable>
                    </LinearGradient>
                </View>
            </LinearGradient>
        </ImageBackground>
    </View>
  )
}

export default Item;
