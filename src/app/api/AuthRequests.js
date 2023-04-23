import React from "react";
import axios from 'axios';
import { REQUEST_URL } from "../constants/GlobalConstants";


const GetUser = async (u_id, controller, method, role) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+u_id+"/"+role);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const RegisterRequest = async (credentials, controller, method) => {
    const {name, email, phone, address, city,  password } = credentials;
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method, {
            name: name,
            email: email,
            phone:phone,
            address:address,
            city:city,
            password:password,
        });
        return response.data;  
        
    }
    catch(error){
        console.log(error);
    }


}

const LoginRequest = async (credentials, controller, method, role) => {
    const inputs = { 
        ...credentials,
        role:role
    };
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method, {
            ...inputs,
        });
        return response.data.user_id;
    }
    catch(error){
        console.log(error);
    }

}

const Mail = async (email, controller, method, role) => {
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method, {
            email: email,
            role:role,
        });
        console.log(response.data);
        return response.data;

    }
    catch(error){
        console.log(error);
    }
}

const ResetPassword = async (credentials, u_id,  controller, method, role) => {
    const {newPassword} = credentials;
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method, {
            id: u_id,
            password: newPassword,
            role:role
        });
        return response.data;

    }
    catch(error){
        console.log(error);
    }
};

const UploadImage = async (image, base, type, u_id, controller, method, role) => {
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method, {
            id: u_id,
            image:image,
            base:base,
            type:type,
            role:role
        },{
           headers:{
            'Content-Type': 'application/json',
           } 
        });
       return response.data;

    }
    catch(error){
        console.log(error);
    }
}

const UpdateProfile = async (credentials, u_id, controller, method, role) => {
    const keys  = Object.keys(credentials);
    const field = keys[0];
    const value = credentials[field];
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method, {
            input:field,
            value:value,
            id:u_id,
            role:role
        });
        return response.data;

    }
    catch(error){
        console.log(error);
    }
}

const ValidateField = async (field, input, id, controller, method, role) => {
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method, {
            field:field,
            input:input,
            id:id,
            role:role
        });
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
} 





export {
    RegisterRequest, 
    LoginRequest, 
    Mail, 
    ResetPassword, 
    UploadImage, 
    GetUser, 
    UpdateProfile,
    ValidateField
};