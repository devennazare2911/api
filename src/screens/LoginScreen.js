import React from 'react'
import { View, StyleSheet, TouchableOpacity,Text,ActivityIndicator } from 'react-native';
import Firebase from '../../config/firebase';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { theme } from '../core/theme';



class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }
    state = {
        email: '',
        password: ''
    }
    handleLogin = () => {
      const { email, password } = this.state


      Firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('Dashboard'))
          
          .catch(error => console.log(error))
          
            this.state.isLoading = true ;
          
    }
    render() {
        return (
          <Background>
       <BackButton goBack={() =>  this.props.navigation.navigate('HomeScreen')} />
       
       {
          // Here the ? Question Mark represent the ternary operator.

        this.state.isLoading ?  <SkypeIndicator color = 'white'/> : null
      }
 


             <Logo />

            <Header>Welcome back.</Header>

          <TextInput
         label="Email"
         returnKeyType="next" 
                    value={this.state.email}
                    
                    onChangeText={email => this.setState({ email })}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <TextInput
                 label="Password"
                 returnKeyType="done"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    secureTextEntry={true}
                />
  <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')} >
          <Text style={styles.label}>Forgot your password???</Text>
        </TouchableOpacity>
      </View>

                        <Button mode="contained" onPress={this.handleLogin}style={styles.button}>
                        Login
                       </Button>
                  <View style={styles.row}>
                    <Text style={styles.label}>Don’t have an account? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                      <Text style={styles.link}>Sign up</Text>
                    </TouchableOpacity>
                  </View>
                </Background>
        )
    }
}
const styles = StyleSheet.create({
  label: {
    color: '#cbd9df',
    fontSize: 17

  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,

  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    fontSize: 17,
    color: '#00FFFF',

  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  }
});

export default LoginScreen
