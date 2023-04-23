import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './components/Auth/AuthContent';
import { AppProvider } from './components/App/AppContent';
import Route from './navigation/Route';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
          <Route />
          <Toast position='bottom' />
      </AppProvider>
    </AuthProvider>
  )

};



export default App;
