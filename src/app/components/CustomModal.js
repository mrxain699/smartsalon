import React from 'react';
import {Text, View, Modal, Image, StyleSheet} from 'react-native';
import {styles} from '../constants/Style';
import Button from '../UI/Button';
const CustomModal = ({animationType, transparent, visible, title, message, btn, onPress}) => {
  return (
    <Modal animationType={animationType} transparent={transparent} visible={visible}>
      <View style = {styles.modal}>
        <View style={styles.modalAlertBox}>
          <View style={styles.modalImageContainer}>
          <Image source={require('../assets/images/fp.png')}/>
          </View>
          <Text style={styles.modalAlertTitle}>{title}</Text>
          {message && <Text style={styles.modalAlertMessage}>{message && message}</Text>}
          <Button text={btn} style={styles.modalAlertBtn} onPress={onPress}/>
        </View>
      </View>
    </Modal>
  )
};


export default CustomModal;