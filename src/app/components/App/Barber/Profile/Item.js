import React, { useContext, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Pressable
} from 'react-native';
import { COLORS as colors } from '../../../../constants/GlobalConstants';
import CustomIcon from '../../../../UI/Icon';
import { UpdateInputModal } from '../../../../UI/Modal';
import { AuthContext } from '../../../Auth/AuthContent';
import Loader from '../../../../UI/Loader';
const Item = ({ navigation, icon, text, identifier, placeholder, updateIcon, onPress, onLoad }) => {
    const { setUpdateInput, update_profile, isLoading, validate_field} = useContext(AuthContext);
    const [showInputModal, setShowInputModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const [fieldname, setFieldname] = useState('');

   

    function changeInputHandler(identifierName, enteredValue) {
        setInputValue(enteredValue);
        setUpdateInput({
            [identifierName]: enteredValue,
        });
        setFieldname(identifierName);
    };

    const isInputExist = async (fieldname, inputValue) => {
        try {
            const response = await validate_field("barber", inputValue, fieldname);
            return response;
        } catch (error) {
            console.log(error);
        }
       
    }

    const all_valid  = async () => {
        if(inputValue === ""){
            setError(`${fieldname} is required*`);
            return false;
        }
        else{
            const response = await isInputExist(fieldname, inputValue);
            if(response === 1){
                setError(`${fieldname} already exist*`);
                return false;
            }
            
        }
        
        return true;
    }

    const closeInputModal = () => {
        setError('');
        setFieldname('');
        setShowInputModal(false);
    }
    return (
        <Pressable
            style={styles.itemContainer}
            onPress={() => {
                onPress && onPress();
            }}>
            <UpdateInputModal
                animationType="fade"
                transparent={true}
                visible={showInputModal}
                identifier={identifier}
                placeholder={placeholder}
                value={inputValue}
                btn="Save"
                inputHandler={changeInputHandler}
                onClose={closeInputModal} 
                onPress={async () => {
                    const is_valid = await all_valid();
                    if(is_valid){
                        update_profile("barber");
                        setError('');
                        setFieldname('');
                        !isLoading && closeInputModal(); 
                    }
                }}
                loading={isLoading}
                error={error}
            />
            <View style={styles.infoContainer} >
                <CustomIcon name={icon} size={24} color={colors.orange} style={styles.itemIcon} />
                <Text style={styles.itemText}>{text}</Text>
            </View>
            {updateIcon ?
                <View style={styles.infoContainer}>
                    <Pressable
                        style={styles.editBtn}
                        onPress={() => {
                            setInputValue(text)
                            setShowInputModal(true);
                        }}>
                        <CustomIcon name="arrow-redo-circle-outline" size={24} color={colors.orange} style={styles.itemIcon} />
                    </Pressable>
                </View>
                :
                onLoad ? <View style={{marginRight:10, alignItems:'center', justifyContent: 'center'}}><Loader /></View> : ''}

        </Pressable>
    )
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: "#000",
        marginBottom: 15,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        paddingVertical:20,
        overflow: 'hidden',
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    itemIcon: {
        marginLeft: 15,
    },
    itemText: {
        fontSize: 18,
        marginLeft: 10,
        color: colors.grey50,
        width:220,
        flexWrap:'nowrap' ,
    },
    editBtn: {
        marginRight: 15,
    }
});

export default Item;