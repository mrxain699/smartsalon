import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { appointmentTabs, width, COLORS as colors } from '../../../../constants/GlobalConstants';
import RecentAppointments from './RecentAppointments';
import BookedAppointments from './BookedAppointments';
import CancelledAppointments from './CancelledAppointments';


const tab_width = width / 3;
const ListTabs = ({ salon_id }) => {
    const [status, setStatus] = useState('Pending');
    const setStatusFilter = status => {
        setStatus(status);
    };

    return (
        <View style={css.container}>
            <View style={css.tabsContainer}>
                <View style={css.listTabContainer}>
                    {
                        appointmentTabs.map((e, i) => (
                            <TouchableOpacity
                                style={[css.tabs, status === e.status && css.tabActive]}
                                key={i * i}
                                onPress={() => setStatusFilter(e.status)}>
                                <Text style={css.tabText}>{e.status}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
            {
            salon_id > 0 &&
            <View style={{ paddingTop: 20, }}>
                {

                    status === "Pending"
                        ? (<RecentAppointments salon_id={salon_id} status={status} />) : status === "Booked"
                            ? (<BookedAppointments salon_id={salon_id} status={status} />) : status === "Cancelled"
                                ? (<CancelledAppointments  salon_id={salon_id} status={status} />) :
                                <RecentAppointments salon_id={salon_id} status={status} />
                }
            </View>
            }
        </View>
    )
};

const css = StyleSheet.create({
    container: {
        flex: 1
    },
    tabsContainer: {
        width: width,
        overflow: 'hidden',
    },
    listTabContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.grey500,

    },
    tabs: {
        width: tab_width,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',

    },
    tabText: {
        fontSize: 16,
        color: colors.grey50
    },
    tabActive: {
        borderBottomWidth: 4,
        borderBottomColor: colors.orange,

    }
});

export default ListTabs