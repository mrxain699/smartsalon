import React, { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    RegisterRequest, 
    LoginRequest, 
    Mail, 
    ResetPassword, 
    UploadImage, 
    GetUser, 
    UpdateProfile,
    ValidateField } from '../../api/AuthRequests';




const AuthContext = createContext();
const initRegCred = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    password: '',
};
const initLoginCred = {
    email: '',
    password: '',
    role: '',
};
const initErr = {
    ...initRegCred,
    confirmPassword: '',
    error: ''
}
const initInputCode = { 1: '', 2: '', 3: '', 4: '' };
const initResetPassword = {
    newPassword: '',
    confirmPassword: '',
}
const initProfile = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    password: '',
    image: '',
}
const AuthProvider = ({ children }) => {
    const [registerCredentials, setRegisterCredentials] = useState(initRegCred);
    const [loginCredentials, setLoginCredentials] = useState(initLoginCred);
    const [loggedInUserId, setLoggedInUserId] = useState(0);
    const [userAddress, setUserAddress] = useState('');
    const [userCity, setUserCity] = useState('');
    const [errors, setErrors] = useState(initErr)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [u_id, setUid] = useState('');
    const [otp, setOtp] = useState(initInputCode);
    const [resetPassword, setResetPassword] = useState(initResetPassword);
    const [isLoading, setIsLoading] = useState(false);
    const [profileImage, setProfileImage] = useState('');
    const [uploadStatus, setUploadStatus] = useState(false);
    const [profile, setProfile] = useState(initProfile);
    const [splashScreenMode, setSplashScreenMode] = useState(true);
    const [roleScreenMode, setRoleScreenMode] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [updateInput, setUpdateInput] = useState({});
    const [alert, setAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [alertBtnText, setAlertBtnText] = useState('');




    const toggleModalHandler = () => {
        setModalVisible(!modalVisible);
    };

    const get_user = async (user_role) => {
        try {
            if (loggedInUserId !== null) {
                const response = await GetUser(loggedInUserId, "authapi", "get", user_role);
                if (response !== 0) {
                    setProfile(response);
                    setProfileImage(response.image);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const register = async () => {
        try {
            const response = await RegisterRequest(registerCredentials, "authapi", "register");
            if (response === 0) {
                setErrors((prevCredentials) => {
                    return {
                        ...prevCredentials,
                        error: "Sorry, Something went wrong!",
                    }
                });
            }
            else if (response > 0) {
                setIsLoading(true);
                const user_id = await AsyncStorage.getItem('user_id');
                if (user_id === null) {
                    AsyncStorage.setItem('user_id', JSON.stringify(response));
                    AsyncStorage.setItem('isLoggedIn', "true");
                    setLoggedInUserId(response);
                    setIsLoggedIn(true);
                    setIsLoading(false);
                    setSplashScreenMode(false);
                    setErrors(initErr);
                    setRegisterCredentials(initRegCred);
                }

            }
            else {
                setErrors((prevCredentials) => {
                    return {
                        ...prevCredentials,
                        ...response,
                    }
                });
            }


        }
        catch (error) {
            console.log(error);
        }
    }

    const login = async (user_role) => {
        if (loginCredentials.email === "") {
            setErrors((prevCredentials) => {
                return {
                    ...prevCredentials,
                    email: "Email is required*",
                }
            });
        }
        else if (loginCredentials.password === "" && loginCredentials.email !== "") {
            setErrors((prevCredentials) => {
                return {
                    ...prevCredentials,
                    email: '',
                    password: "Password is required*",
                }
            });
        }
        if (loginCredentials.email !== "" && loginCredentials.password !== "") {
            setErrors(initErr);
            try {
                let id = await LoginRequest(loginCredentials, "authapi", "login", user_role);
                if (id > 0) {
                    setIsLoading(true);
                    const user_id = await AsyncStorage.getItem('user_id');
                    if (user_id == null) {
                        AsyncStorage.setItem('user_id', id);
                        AsyncStorage.setItem('isLoggedIn', "true");
                        setLoggedInUserId(id);
                        setIsLoggedIn(true);
                        setSplashScreenMode(false);
                        setIsLoading(false);
                        setLoginCredentials(initLoginCred);
                    }
                }
                else {
                    setErrors((prevCredentials) => {
                        return {
                            ...prevCredentials,
                            error: "Wrong email or password*",
                        }
                    });
                }

            }
            catch (error) {
                console.log(error);
            }

        }


    }

    const send_email = async (user_role) => {
        setIsLoading(true);
        if (email === "") {
            setErrors((prevCredentials) => {
                return {
                    ...prevCredentials,
                    email: "Email is required*",
                }
            });
            setIsLoading(false);
        }
        else {
            try {
                const response = await Mail(email, "authapi", "sendmail", user_role);
                if (response === 0) {
                    setErrors((prevCredentials) => {
                        return {
                            ...prevCredentials,
                            email: "Email doesn't exist*",
                        }
                    });
                    setIsLoading(false);
                }
                else if (response === -1) {
                    setErrors((prevCredentials) => {
                        return {
                            ...prevCredentials,
                            email: "Sorry, something went wrong*",
                        }
                    });
                    setIsLoading(false);
                }
                else {
                    if (response.u_id && response.code) {
                        setUid(response.u_id)
                        setCode(response.code);
                        toggleModalHandler();
                        setErrors(initErr);
                        setIsLoading(false);
                    }
                    else {
                        setIsLoading(false);
                        setErrors((prevCredentials) => {
                            return {
                                ...prevCredentials,
                                error: "Sorry, something went wrong*",
                            }
                        });
                    }

                }
            }
            catch (error) {
                console.log(error);
            }
        }

    }

    const reset_password = async (user_role) => {
        setIsLoading(true);
        if (resetPassword.newPassword === "") {
            setErrors((prevCredentials) => {
                return {
                    ...prevCredentials,
                    password: "Password is required*",
                }
            });
            setIsLoading(false);
        }
        else if (resetPassword.newPassword.length < 8) {
            setErrors((prevCredentials) => {
                return {
                    ...prevCredentials,
                    password: "Password should be minimum 8 character long*",
                }
            });
            setIsLoading(false);
        }
        else if (resetPassword.confirmPassword === "" && loginCredentials.confirmPassword !== "") {
            setErrors((prevCredentials) => {
                return {
                    ...prevCredentials,
                    password: '',
                    confirmPassword: "Confirm Password is required*",
                }
            });
            setIsLoading(false);
        }
        else if (resetPassword.newPassword !== resetPassword.confirmPassword) {
            setErrors((prevCredentials) => {
                return {
                    ...prevCredentials,
                    password: '',
                    confirmPassword: "",
                    error: "Confirm Password didn't match.",
                }
            });
            setIsLoading(false);
        }
        else if (resetPassword.newPassword === resetPassword.confirmPassword !== "") {
            setErrors(initErr);
            try {
                const response = await ResetPassword(resetPassword, u_id, "authapi", "reset_password", user_role);
                if (response === 1) {
                    toggleModalHandler();
                    setUid('');
                    setResetPassword(initResetPassword);
                    setIsLoading(false);
                }
                else {
                    setErrors((prevCredentials) => {
                        return {
                            ...prevCredentials,
                            password: '',
                            confirmPassword: "",
                            error: "Sorry, something went wrong.",
                        }
                    });
                    setIsLoading(false);
                }
            }
            catch (error) {
                console.log(error)
            }

        }
    };


    const upload_image = async (image, user_role) => {
        try {
            if (loggedInUserId !== null) {
                let image_name = image.path.split("/");
                image_name = image_name[image_name.length - 1];
                let image_ext = image_name.split(".");
                image_ext = image_ext[image_ext.length - 1];
                const response = await UploadImage(image_name, image.data, image_ext, loggedInUserId, "authapi", "upload_image", user_role);
                if (response === 1) {
                    get_user(user_role);
                    setAlert(true);
                    setAlertTitle("Success");
                    setAlertType('success');
                    setAlertMessage("Image Uploaded Successfully.");
                    setAlertBtnText('Done');
                }
                else if (response === 0) {
                    setAlert(true);
                    setAlertTitle("Error");
                    setAlertType('error');
                    setAlertMessage("Sorry, something went wrong.");
                    setAlertBtnText('Done');
                }

            }
        }
        catch (error) {
            console.log(error);
        }
    };

    const update_profile = async (user_role) => {
        if(updateInput !== {}){
            try {
                if (loggedInUserId !== null) {
                    const response = await UpdateProfile(updateInput, loggedInUserId, "authapi", "update", user_role);
                    setIsLoading(true);
                    if (response === 1) {
                        setIsLoading(false);
                        get_user(user_role);
                    }
                    else{
                        setIsLoading(false); 
                    }
    
                }
            }
            catch (error) {
                console.log(error);
            }
        }
       
    };

    const validate_field = async (user_role, input, field) => {
        try {
            if (loggedInUserId !== null) {
                const response = await ValidateField(field, input, loggedInUserId, "authapi", "validateField", user_role);
                return response;
                
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        setIsLoading(true);
        try {
            const user_id = await AsyncStorage.getItem('user_id');
            if (user_id !== null) {
                AsyncStorage.removeItem('user_id');
                AsyncStorage.setItem('isLoggedIn', "false");
                setLoggedInUserId(0);
                setIsLoggedIn(false);
                setSplashScreenMode(false);
                setRoleScreenMode(false);
                setIsLoading(false);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const getUserId = async () => {
        const user_id = await AsyncStorage.getItem('user_id');
        if (user_id !== null) {
            setLoggedInUserId(user_id);
            return loggedInUserId;
        }
    }


    const value = {
        splashScreenMode,
        roleScreenMode,
        errors,
        registerCredentials,
        setRegisterCredentials,
        register,
        setRoleScreenMode,
        loginCredentials,
        setLoginCredentials,
        login,
        isLoggedIn,
        logout,
        email,
        setEmail,
        send_email,
        modalVisible,
        setModalVisible,
        toggleModalHandler,
        isLoading,
        setIsLoading,
        code,
        setCode,
        otp,
        setOtp,
        initInputCode,
        resetPassword,
        setResetPassword,
        initResetPassword,
        reset_password,
        profileImage,
        setProfileImage,
        upload_image,
        uploadStatus,
        setUploadStatus,
        get_user,
        profile,
        setUpdateInput,
        updateInput,
        update_profile,
        alert,
        alertTitle,
        alertMessage,
        alertBtnText,
        alertType,
        setAlert,
        loggedInUserId,
        getUserId,
        setLoggedInUserId,
        validate_field,
        setErrors,
        initErr



    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthProvider, AuthContext };