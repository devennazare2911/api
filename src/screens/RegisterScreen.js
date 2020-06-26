
import React from 'react';
import { View, StyleSheet, TouchableOpacity ,Text } from 'react-native';
import Firebase from '../../config/firebase';
import { updateEmail, updatePassword, signup } from '../../actions/users';
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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Background from '../components/Background';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';

import Header from '../components/Header';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';

 class RegisterScreen extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    handleSignUp = () => {

      const { email, password } = this.state
      Firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('LoginScreen'))
          .catch(error => console.log(error))
    }
    render() {
        return (
          <Background>
               <BackButton goBack={() => this.props.navigation.navigate('LoginScreen')} />
               <Header>Create Account !</Header>

              <Logo />
                <TextInput
                    label="Name"
                    returnKeyType="next"
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                  
                />
                <TextInput
                  label="Email"
                  returnKeyType="next"
                   
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    autoCapitalize='none'
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    label="Password"
                     returnKeyType="done"
                    secureTextEntry={true}
                />
                   <Button mode="contained" onPress={this.handleSignUp} style={styles.button}>
                      Sign Up
                    </Button>
                    <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')} >
          <Text style={styles.link}>Login</Text>
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
    inputBox: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor: '#d3d3d3',
      borderBottomWidth: 1,
      textAlign: 'left',
      backgroundColor: '#FFFFFF'
  },
  });
export default RegisterScreen