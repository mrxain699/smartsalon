import axios from 'axios';
import { REQUEST_URL } from "../../constants/GlobalConstants";

const Booked = async (controller, method, id) => {
    try {
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+id)
        if(response){
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

const Canceled = async (controller, method, id) => {
    try {
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+id);
        if(response){
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

const GetAppointmentByStatus = async (controller, method, salon_id, status) => {
    try {
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id+"/"+status);
        if(response){
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    Booked,
    Canceled,
    GetAppointmentByStatus
}

