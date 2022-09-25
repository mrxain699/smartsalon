import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomModal from '../../CustomModal';
import { COLORS as color } from '../../../constants/GlobalConstants';
import { styles } from '../../../constants/Style';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
const ResetPassword = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalHandler = () => {
    setModalVisible(!modalVisible);
  };
  
  return (
    <View style={[styles.container, {paddingVertical:20, paddingHorizontal:20,}]}>
      <CustomModal 
      animationType="fade" 
      transparent={true} 
      visible={modalVisible} 
      title="Your password has been reset."
      btn="Done"
      onPress={()=>navigation.navigate('LoginScreen')}
      />
      <Text style={styles.heading}>Create New Password</Text>
      <Text style={[styles.subtitle, componentStyle.subheading]}>Your new password must be different from previous used passwords.</Text>
      <View style={[styles.inputContainer]}>
        <Input placeholder="New Password" autofocus="true" secureTextEntry={true} />
        <Input placeholder="Confirm Password" secureTextEntry={true} />
      </View>
      <Button text="Reset Password"  onPress={toggleModalHandler}/>
    </View>
  )
};

const componentStyle = StyleSheet.create({
    subheading:{
      paddingHorizontal:20,
      color:color.grey700,
      fontSize:15,
      lineHeight:22,
      marginTop:10,
    },
    
  });


export default ResetPassword;