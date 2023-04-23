import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomModal from '../../CustomModal';
import { COLORS as color } from '../../../constants/GlobalConstants';
import { styles } from '../../../constants/Style';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
import { AuthContext } from '../AuthContent';


const ResetPassword = ({navigation, route}) => {
  const { 
    setResetPassword,
    reset_password, 
    errors,
    toggleModalHandler, 
    modalVisible,
    setErrors,
    initErr
  } = useContext(AuthContext);

  useEffect(()=>{
    setErrors(initErr);
  }, []);


  function changeInputHandler(identifierName, enteredValue) {
    setResetPassword((curInputValues) => {
      return {
        ...curInputValues,
        [identifierName]: enteredValue,
      }
    });
  };

  const closeModal = () => {
    toggleModalHandler();
    navigation.replace('LoginScreen');
  }


  return (
    <View style={[styles.container, {paddingTop:100, paddingHorizontal:20,}]}>
      <CustomModal 
      animationType="fade" 
      transparent={true} 
      visible={modalVisible} 
      title="Your password has been reset."
      btn="Done"
      onPress={()=>{closeModal()}}
      />
      <Text style={styles.heading}>Create New Password</Text>
      <Text style={[styles.subtitle, componentStyle.subheading]}>Your new password must be different from previous used passwords.</Text>
      {errors.error ? (<Text style={{ color: 'red', textAlign: 'center', marginTop: 5, }}>{errors.error}</Text>) : ''}
      <View style={[styles.inputContainer]}>
        <Input 
        placeholder="New Password" 
        autofocus="true" 
        secureTextEntry={true}
        onChangeText={changeInputHandler.bind(this, 'newPassword')}
         />
        {errors.password  ? <Text style={styles.error}>{errors.password}</Text> : ''}
        <Input 
        placeholder="Confirm Password" 
        secureTextEntry={true}
        onChangeText={changeInputHandler.bind(this, 'confirmPassword')}
        />
        {errors.confirmPassword  ? <Text style={styles.error}>{errors.confirmPassword}</Text> : ''}
      </View>
      <Button text="Reset Password"  onPress={()=>{reset_password(route.params.userRole)}} />
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