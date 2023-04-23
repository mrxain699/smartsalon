import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { COLORS as color } from '../../../constants/GlobalConstants';
import { getSalonServices } from '../../../api/SalonRequests';
import { AppContext } from '../AppContent';
const ServicesDropDown = ({ category, salon_id, index }) => {
    const {setSelectedServices,  setServicePrice} = useContext(AppContext);
    const [services, setServices] = useState([]);
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);


    const handleDropdownSelect = (dropdownId, service) => {
        for(let i = 0; i < services.length; i++) {
            if(services[i].name === service){
                setServicePrice(prevServicePrice => prevServicePrice + Number(services[i].price));
            }
        }
        setSelectedServices(prevServices => {
          const updatedValues = [...prevServices];
          const index = updatedValues.findIndex(v => v.dropdownId === dropdownId);
          if (index >= 0) {
            updatedValues[dropdownId] = { dropdownId, service };
          } else {
            updatedValues.push({ dropdownId, service });
          }
          return updatedValues;
        });
      };

 
    const serviceItem = () => {
        let itemArr = [];
        for (let i = 0; i < services.length; i++) {
            const service = {
                label: services[i].name,
                value: services[i].name,
            }
            itemArr.push(service);
        }
        setData(itemArr);
    }


    useEffect(() => {
        const getServices = async () => {
            try {
                const response = await getSalonServices("service", "getSalonServices", category, salon_id);
                setServices(response);
            }
            catch (err) {
                console.log(err);
            }
        }
        getServices();
    }, []);

    useEffect(() => {
        serviceItem();
    }, [services]);


    return (

        <Dropdown
            index={index}
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            itemTextStyle={{color:color.grey700}}
            data={data}
            search={false}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={`Select ${category}`}
            value={value}
            onChange={item => {
                handleDropdownSelect(index, item.value);
                setValue(item.value);
            }}

        />

    )
}
const styles = StyleSheet.create({
    dropdown: {
        width: 200,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 3,
        backgroundColor: '#fafafa'
    },
    placeholderStyle: { 
        fontSize: 16,
        color:color.grey700,
    },
    selectedTextStyle: {
        fontSize: 16,
        color:color.grey700,
    }

});
export default ServicesDropDown;

