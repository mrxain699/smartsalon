import React, {useContext} from 'react';
import {View} from 'react-native';
import Header from '../Header';
import Body from './Body';
import { styles } from '../../../constants/Style';
import { AppContext } from '../AppContent';
const Nearby = () => {
  const {formatedAddress} = useContext(AppContext);
  const style = {
    headerBar : {...styles.headerBar,  alignItems: 'flex-start', paddingHorizontal:25},
    headerTitle:{...styles.headerTitle, fontSize:14, fontWeight:'400', marginLeft:5},
    headerSubTitle:{fontSize:18, fontWeight:'bold', color:'#ffffff'},
  }
  return (
    <View style={styles.container}>
      <Header
      image={require('../../../assets/images/homeheader.jpg')}
      title={formatedAddress}
      subtitle="Pakistan" 
      style={style}
      icon={true}
      component="nearby"
      search={false}
      />
      <Body/>
    </View>
  )
}

export default Nearby;