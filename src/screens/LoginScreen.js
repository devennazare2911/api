import React from 'react'
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import Firebase from '../../config/firebase';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';


import { theme } from '../core/theme';



class LoginScreen extends React.Component {
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
    }
    render() {
        return (
          <Background>
       <BackButton goBack={() => navigation.navigate('HomeScreen')} />

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
});

export default LoginScreen
