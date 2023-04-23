import axios from 'axios';
import { REQUEST_URL } from "../../constants/GlobalConstants";


const GetChats = async (controller, method, sender) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+sender);
        return response.data;  
    }
    catch(error){
        console.log(error);
    }
}


export {
    GetChats,
}

