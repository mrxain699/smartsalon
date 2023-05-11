import React from "react";
import axios from 'axios';
import { REQUEST_URL } from "../constants/GlobalConstants";

const GetSalons = async (controller, method, customer_id) => {
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method+"/"+customer_id);
        return response.data;  
        
    }
    catch(error){
        console.log(error);
    } 
};

const getSalonWorkers = async (controller, method, salon_id) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id);
        return response.data;  
        
    }
    catch(error){
        console.log(error);
    } 
}

const getSalonCategories = async (controller, method, salon_id) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const getServicesType = async (controller, method, salon_id) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const getSalonGallery = async (controller, method, salon_id) =>{
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const getSalonServices = async (controller, method, category, salon_id) =>{
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+category+"/"+salon_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}


const BookAppointment = async (controller, method, data) => {
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method,{
            ...data
        },{
            headers:{
             'Content-Type': 'application/json',
            } 
         });
         return response.data;
    }   
    catch(err){
        console.log(err)
    }
};

const GetAppointments = async (controller, method, user_id) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+user_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const GetAllAppointments = async (controller, method, salon_id) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const SubmitReview = async (controller, method, review, rating, salon_id, customer_id) => {
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method,{
            review:review,
            rating:rating,
            salon_id:salon_id,
            customer_id:customer_id
        },{
            headers:{
             'Content-Type': 'application/json',
            } 
         });
         return response.data;
    }   
    catch(err){
        console.log(err)
    }
};

const GetReviews = async (controller, method, salon_id) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const GetTotalReviews = async (controller, method, salon_id) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const GetAverageRating = async (controller, method, salon_id) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const GetCustomer = async (controller, method, customer_id) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+customer_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    } 
}

const GetMessages = async (controller, method, sender, reciever) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+sender+"/"+reciever);
        return response.data;  
    }
    catch(error){
        console.log(error);
    }
}

const SendMessage = async(controller, method, message) => {
    try{
        const response = await axios.post(REQUEST_URL+controller+"/"+method,{
            ...message
        },{
            headers:{
             'Content-Type': 'application/json',
            } 
         });

         return response.data;

    }   
    catch(err){
        console.log(err)
    }
}

const GetChats = async (controller, method, sender) => {
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+sender);
        return response.data;  
    }
    catch(error){
        console.log(error);
    }
}

const GetProducts = async (controller, method, salon_id) => {
    
    try{
        const response = await axios.get(REQUEST_URL+controller+"/"+method+"/"+salon_id);
        return response.data;  
    }
    catch(error){
        console.log(error);
    }
}

export {
    GetSalons, 
    getSalonWorkers, 
    getSalonCategories, 
    getServicesType, 
    getSalonGallery, 
    getSalonServices, 
    BookAppointment, 
    SubmitReview, 
    GetReviews,
    GetTotalReviews,
    GetAverageRating,
    GetCustomer,
    GetMessages,
    SendMessage,
    GetAppointments,
    GetChats,
    GetProducts,
    GetAllAppointments
};


