import React, {useState, useEffect} from 'react';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './components/Auth/AuthContent';






const App = () => {
  const [user, setUser] = useState('');
  const [initializing, setInitializing] = useState(true);


  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    
      <NavigationContainer>
        <AuthProvider>
          {!user ? <AuthStack/> : <AppStack/>} 
        </AuthProvider>
      </NavigationContainer>
  )  
  
};



export default App;
