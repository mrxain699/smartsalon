import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import CustomIcon from '../../../UI/Icon';
import { COLORS as colors, radio_props } from '../../../constants/GlobalConstants';
import { getTodayDate, getFormatedDate,getUserId } from '../../../util/Functions';
import { Calendar } from 'react-native-calendars';
import RadioForm, { RadioButton, RadioButtonLabel } from 'react-native-simple-radio-button';
import Button from '../../../UI/Button';
import { CustomModal } from '../../../UI/Modal';
import { AppContext } from '../AppContent';
import { AuthContext } from '../../Auth/AuthContent';
import Toast from 'react-native-toast-message';



const Appointment = ({ navigation, route }) => {
    const {showAppointmentModal, bookAppointment, isLoading, setIsLoading, setShowAppointmentModal} = useContext(AppContext);
    const {loggedInUserId} = useContext(AuthContext);
    const [showCalendar, setShowCalendar] = useState(false);
    const [formatedDate, setFormatedDate] = useState(getFormatedDate(new Date(), "WWW MMM DD YYYY"));
    const [currentDate, setCurrentDate] = useState(getTodayDate());
    const [newDate, setNewDate] = useState(currentDate);
    const [isTimeSelected, setIsTimeSelected] = useState(false);
    const [time, setTime] = useState('');
    const [appointment, setAppointment] = useState({})

  

    useEffect(()=>{
        setAppointment(route.params);
    },[])

    useEffect(() => {
        setFormatedDate(getFormatedDate(new Date(), "WWW MMM DD YYYY"));
        setCurrentDate(getTodayDate());
    }, []);

    const getMarkedDates = () => {
        const markedDates = {};
        markedDates[newDate] = { selected: true };
        return markedDates;
    };

    const onClickHandler  = async () => {
        if(time != "" && isTimeSelected) {
            setIsLoading(true);
            bookAppointment(appointment, loggedInUserId, newDate, time);
        }
        else{
            Toast.show({
                type: 'error',
                text1: 'Please select the time',
            });
        }
    };

    const goNext = () => {
        navigation.navigate("AppointmentsScreen");
        setShowAppointmentModal(false);
    }

    return (
        <View style={styles.container}>
            <CustomModal
                animationType={'fade'}
                transparent={true}
                visible={showAppointmentModal}
                image={require('../../../assets/images/check.png')}
                title="Your appointment booking is successfully."
                message="You can view the appointment booking info in the Appointment section."
                btn="Done"
                onPress={()=>{
                    goNext();
                }}
            />
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={showCalendar}
                onRequestClose={() => {
                    setShowCalendar(false);
                }}
            >
                <View style={styles.modalView}>
                    <Calendar
                        minDate={currentDate}
                        onDayPress={day => {
                            setNewDate(day.dateString);
                            setFormatedDate(getFormatedDate(new Date(day.dateString), "WWW MMM DD YYYY"));
                            setShowCalendar(false);
                        }}
                        markedDates={getMarkedDates()}
                        enableSwipeMonths={true}
                        theme={{
                            calendarBackground: '#090C08',
                            selectedDayBackgroundColor: '#F4722B',
                            selectedDayTextColor: '#fff',
                            dayTextColor: '#D6C7A1',
                            textDisabledColor: '#cdcdcd',
                            monthTextColor: '#FFA25B',
                            textMonthFontWeight: 'bold',
                            arrowColor: '#F4722B',
                        }}
                        style={{ borderRadius: 15 }}
                    />
                </View>
            </Modal>
            <Pressable style={styles.dateContainer} onPress={() => setShowCalendar(true)}>
                <Text style={styles.dateText}>{formatedDate}</Text>
                <CustomIcon
                    name="calendar"
                    size={24}
                    color={colors.orange}
                    style={styles.calendarIcon}
                    onPress={
                        () => {
                            setShowCalendar(true);
                        }
                    } />
            </Pressable>
            <View style={styles.timeConatiner}>
                <Text style={styles.timeHeading}>Select Appointment Time</Text>
                <View style={styles.timesButtonsContainer}>
                    <RadioForm
                        formHorizontal={true}
                        animation={true}
                        style={{ flexWrap: 'wrap' }}
                    >
                        {
                            radio_props.map((obj, i) => (
                                <RadioButton labelHorizontal={true} key={i} style={[styles.radioButton, isTimeSelected && time === obj.value && styles.onSelected]}>
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelHorizontal={true}
                                        onPress={(value) => {
                                            setIsTimeSelected(true);
                                            setTime(value);
                                        }
                                        }
                                        labelStyle={[styles.labelText, isTimeSelected && time === obj.value && styles.onSelectedText]}
                                        labelWrapStyle={styles.customLabelWrap}
                                    />
                                </RadioButton>
                            ))
                        }
                    </RadioForm>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <Button text="Book Appointment" onPress={() => { onClickHandler() }} loading={isLoading}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    dateContainer: {
        height: 50,
        marginHorizontal: 20,
        marginTop: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ececec',
        borderRadius: 50,
    },
    dateText: {
        fontSize: 16,
        color: colors.grey700,
    },
    calendarIcon: {
        alignSelf: 'center',
    },
    modalView: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    timeConatiner: {
        marginTop: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    timeHeading: {
        fontSize: 15,
        color: colors.grey50,
    },
    timesButtonsContainer: {
        paddingTop: 20,
    },
    radioButton: {
        borderWidth: 2,
        borderColor: 'orange',
        height: 35,
        width: 90,
        marginRight: 15,
        borderRadius: 8,
        padding: 0,
        flexWrap: 'wrap',
        marginBottom: 8,

    },
    labelText: {
        fontSize: 14,
        color: '#000',
    },
    customLabelWrap: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 0,
        flexDirection: 'column',
        paddingRight: 10,
        paddingTop: 2,
        textAlign: 'center',

    },
    onSelected: {
        backgroundColor: 'orange',
    },
    onSelectedText: {
        color: '#fff',
    },
    btnContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        paddingBottom: 30,
        paddingHorizontal: 20,
    }

});
export default Appointment;