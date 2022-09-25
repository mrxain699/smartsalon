import React, {useState, createContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const AuthContext =  createContext();


const AuthProvider = ({children, navigation}) => {
    const [emailError, setEmailError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [onLoad, setOnLoad] = useState(false);
    const [splashMode , setSplashMode] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState();
    const [loginCredentials, setLoginCredentials] = useState({
        email:'',
        password:'',
    });
    const [credentials, setCredentials] = useState({
        username:'',
        email:'',
        phone:'',
        password:'',
        confirm_password:'',
    });


    const toggleModalHandler = () => {
        setModalVisible(!modalVisible);
    };

    const registerUser = async (username, email, phone, password) => {
        await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            setOnLoad(true);
            firestore().collection('users')
            .doc(auth().currentUser.uid)
            .set({
                username:username,
                email:email,
                phone:phone,
            })
            setSplashMode(false)
            setCredentials((prevCredentials)=>{
                return {
                    ...prevCredentials,
                    username:'',
                    email:'',
                    phone:'',
                    password:'',
                    confirm_password:'',
                }
            })
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                setEmailError('That email address is already in use');
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                setEmailError('That email address is invalid!');
                console.log('That email address is invalid!');
            }
        });
    
        
      };

      const loginUser = async (email, password) => {
        try{
            await auth().signInWithEmailAndPassword(email,password)
            .then(() => {
                setOnLoad(true);
                setSplashMode(false)
                setLoginCredentials((prevCredentials)=>{
                    return {
                        ...prevCredentials,
                        email:'',
                        password:''
                    }
                })
            })
        }
        catch(error){
            console.log(error.message);
            setLoginError("Wrong username or password");
        }
      };

      const logoutUser =  async () => {
      await auth()
       .signOut()
       .then(() => {
            setSplashMode(false);
            setOnLoad(false);
            setLoginError('');
            setEmailError('');
            console.log('User signed out!')
      })
       .catch((error)=>{
          console.log(error.message);
       })
      }


    const value = {
        credentials,
        setCredentials,
        navigation,
        user,
        setUser,
        registerUser,
        loginCredentials,
        setLoginCredentials,
        loginUser,
        splashMode,
        toggleModalHandler,
        modalVisible,
        setSplashMode,
        logoutUser,
        onLoad,
        loginError,
        emailError
    }
    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
};

export {AuthProvider, AuthContext} ;