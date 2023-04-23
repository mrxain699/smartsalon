import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { UserRole } from '../components/Auth/UserRole';

const UserRoleScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <UserRole navigation={navigation} />
        </SafeAreaView>
    )
};

export default UserRoleScreen;