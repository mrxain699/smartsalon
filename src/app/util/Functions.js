import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const title = (string) => {
    if(string){
        if(string.includes(" ")){
            string = string.split(" ");
            for(let  i = 0; i < string.length; i++) {
                string[i] = string[i].charAt(0).toUpperCase()+string[i].slice(1);
            } 
            string = string.toString().replace(",", " ");
        }
        else{
            string =  string.charAt(0).toUpperCase()+string.slice(1);
        }
    
    }
   
    return string;
};


const getTodayDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${year}-${month < 10 ? '0' : ''}${month + 1}-${day < 10 ? '0' : ''}${day}`;
    
}


const getFormatedDate = (date = null, format) => {
    
    if(date === null){
        date = new Date();
    }

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
    let year = date.getFullYear();
    let month = date.getMonth();
    let month_date = date.getDate();
    let day_name = weekday[date.getDay()];
    let month_name = months[date.getMonth()];
  
    if(format === "YYYY-MM-DD"){
        return `${year}-${month < 10 ? '0' : ''}${month + 1}-${month_date < 10 ? '0' : ''}${month_date}`;
    }
    else if(format === "YYYY/MM/DD"){
        return `${year}/${month < 10 ? '0' : ''}${month + 1}/${month_date < 10 ? '0' : ''}${month_date}`;
    }
    else if(format === "DD/MM/YYYY"){
        return `${month_date < 10 ? '0' : ''}${month_date}/${month < 10 ? '0' : ''}${month + 1}/${year}`;
    }
    else if(format === "DD-MM-YYYY"){
        return `${month_date < 10 ? '0' : ''}${month_date}-${month < 10 ? '0' : ''}${month + 1}-${year}`;
    }
    else if(format === "WWW MMM DD YYYY"){
        return `${day_name}, ${month_name} ${month_date < 10 ? '0' : ''}${month_date}, ${year}`;
    }
    
};

const getFormatedTime = (date) => {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let apprend = hour >=12 ? "PM" : "AM";
    hour = (hour % 12) || 12;
    return `${hour}:${minute} ${apprend}`;
}

const getUserId = async () => {
    let id = 0;
    try{
        const user_id = await AsyncStorage.getItem('user_id');
        if (user_id !== null) {
            id = user_id;
        }
    }
    catch(err){
        console.log(err);
    }
    return id;
}

const getUserRole = async () => {
    let role = '';
    try{
        const user_role = await AsyncStorage.getItem('role');
        if (user_role !== null) {
            role = user_role;
        }
    }
    catch(err){
        console.log(err);
    }
    return role;
}

const isUserLoggedIn = async () => {
    let is_logged_in = "false";
    try{
        const loggedIn = await AsyncStorage.getItem('isLoggedIn');
        if (loggedIn !== null) {
            is_logged_in = loggedIn;
        }
    }
    catch(err){
        console.log(err);
    }
    return is_logged_in;
}


export {
    title, 
    getFormatedDate, 
    getTodayDate, 
    getFormatedTime, 
    getUserId,
    getUserRole,
    isUserLoggedIn
};

