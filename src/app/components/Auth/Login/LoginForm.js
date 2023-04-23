import React, { useContext, useEffect, useState } from 'react';
import { 
View,
Text, 
TouchableOpacity, 
ScrollView,
} 
from 'react-native';
import { styles } from '../../../constants/Style';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import { AuthContext } from '../AuthContent';
import {getUserRole} from '../../../util/Functions';
const LoginForm = ({ navigation, role }) => {
  const { 
    loginCredentials, 
    setLoginCredentials, 
    login, 
    errors, 
    isLoading,
  } = useContext(AuthContext);
  const [userRole, setUserRole] = useState("");
  const { email, password } = loginCredentials;

  

  // useEffect(() => {
  //   const getRole = async () => {
  //     const role = await getUserRole();
  //     if (role !== null) {
  //       setUserRole(role);
  //     }

  //   }
  //   getRole();
  // }, []);
  

  function changeInputHandler(identifierName, enteredValue) {
    setLoginCredentials((curInputValues) => {
      return {
        ...curInputValues,
        [identifierName]: enteredValue,
      }
    });
  };

  return (
    <View style={styles.loginForm}>
      <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Welcome</Text>
        <Text style={styles.subtitle}>Login to your account</Text>
        {errors.error ? (<Text style={{ color: 'red', textAlign: 'center', marginTop: 5, }}>{errors.error}</Text>) : ''}
        <View style={styles.inputContainer}>
          <Input placeholder="Email"
            onChangeText={changeInputHandler.bind(this, 'email')}
            value={email} />
          {errors.email ? <Text style={styles.error}>{errors.email}</Text> : ''}
          <Input placeholder="password"
            secureTextEntry={true}
            onChangeText={changeInputHandler.bind(this, 'password')}
            value={password}
          />
          {errors.password  ? <Text style={styles.error}>{errors.password}</Text> : ''}
        </View>
        <Button text="Login" onPress={() => { login(role)}} loading={isLoading && isLoading} />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen', {userRole:role})}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
        {
          role == "customer" &&
        <Text style={styles.accountText}>Don't have an account?
          <Text style={styles.textBtn} onPress={() => navigation.navigate('SignupScreen')}> Sign up</Text>
        </Text>
        }
        </ScrollView>
    </View>
  )
};

export default LoginForm;