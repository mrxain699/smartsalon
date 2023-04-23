import axios from 'axios';
import { REQUEST_URL } from "../../constants/GlobalConstants";

const GetSalon = async (controller, method, $barber_id) => {
    try {
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+$barber_id);
        if(response){
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    GetSalon
}

