import React, { createContext, useState, useContext } from 'react';
import { log } from 'react-native-reanimated';
import {
  GetSalons,
  getSalonWorkers,
  getSalonCategories,
  BookAppointment,
  SubmitReview,
  GetReviews,
  GetTotalReviews,
  GetAverageRating,
  GetProducts
} from '../../api/SalonRequests';

const AppContext = createContext();

const initCurrentLocation = {
  latitude: 0,
  longitude: 0,
}

const AppProvider = ({ children }) => {

  const [gps, setGPS] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(initCurrentLocation);
  const [formatedAddress, setFormattedAddress] = useState('');
  const [salons, setSalons] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [serviceCategories, setServiceCategories] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [errorMessage, setErrorMessage]  = useState('');
  const [servicePrice, setServicePrice] = useState(0);
  const [toastType, setToastType] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const all_salons = async (customer_id) => {
    try {
      const response = await GetSalons("salon", "get_all", customer_id);
      if(response != 0){
        setSalons(response);
      }
      else{
        setErrorMessage('No Salon exist');
      }

    }
    catch (error) {
      console.log(error);
    }
  }

  const salonWorkers = async (salon_id) => {
    try {
      const response = await getSalonWorkers("worker", "get", salon_id);
      if(response != 0){
        setWorkers(response);
      }
      else{
        setErrorMessage('No record exist')
      }

    }
    catch (error) {
      console.log(error);
    }
  }

  const salonServiceCategories = async (salon_id) => {
    try {
      const response = await getSalonCategories("category", "getCategories", salon_id);
      if(response != 0){
        setServiceCategories(response);
      }
      else{
        setErrorMessage('No record exist');
      }
      
    }
    catch (error) {
      console.log(error);
    }
  }



  const bookAppointment = async (appointment, customer_id, newDate, time) => {
    const new_app = {
      ...appointment,
      customer_id: customer_id,
      date:newDate,
      time,
    }
    try {
      const response = await BookAppointment("appointment", "add", new_app);
      if (response) {
        setShowAppointmentModal(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const sendReview = async (review, rating, salon_id, customer_id) => {
    try {
      const response = await SubmitReview("review", "add", review, rating, salon_id, customer_id);
      if (response == 1) {
        setReviewModal(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getReviews = async (salon_id) => {
    try {
      const response = await GetReviews("review", "get", salon_id);
      if(response != 0 && response != -1) {
        setReviews(response);
      }
      else{
        setErrorMessage('No record exist');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getTotalReviews = async (salon_id)=> {
    try {
      const response = await GetTotalReviews("review", "totalReviews", salon_id);
      if(response >= 0) {
        setTotalReviews(response);
      }

    } catch (error) {
      console.log(error);
    }
  }

  const getAverageRating = async (salon_id)=> {
    try {
      const response = await GetAverageRating("review", "averageRating", salon_id);
      if(response) {
        setAverageRating(response);
      }
      

    } catch (error) {
      console.log(error);
    }
  }

  const getSalonProducts = async (salon_id)=> {
    try {
      const response = await GetProducts("product", "get", salon_id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }



  const value = {
    gps,
    salons,
    workers,
    serviceCategories,
    currentLocation,
    formatedAddress,
    selectedServices,
    showAppointmentModal,
    reviewModal,
    reviews,
    totalReviews,
    averageRating,
    setGPS,
    all_salons,
    salonWorkers,
    salonServiceCategories,
    setCurrentLocation,
    setFormattedAddress,
    setSelectedServices,
    setShowAppointmentModal,
    bookAppointment,
    sendReview,
    setReviewModal,
    getReviews,
    getTotalReviews,
    getAverageRating,
    errorMessage,
    servicePrice,
    setServicePrice,
    toastType, 
    setToastType,
    toastMessage,
    setToastMessage,
    isLoading,
    setIsLoading,
    getSalonProducts



  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext };