import React from 'react'
import { View } from 'react-native';
import { styles } from '../../../constants/Style';
import Header from './Header';
import Body from './Body';

const Salon = ({ navigation, salon }) => {

  const { id, name, image, address, about } = salon;


  return (
    <View style={styles.container}>
      <Header salon_id={id} image={image} name={name} address={address} />
      <Body salon_id={id} salon={salon} />
    </View>

  )
};

export default Salon;