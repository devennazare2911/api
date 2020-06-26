import React, { memo , Component } from 'react';
import Background from '../components/Background';
import HomeBackground from '../components/HomeBackground';
import Tabbar from 'react-native-tabbar-bottom';

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import { ModernHeader } from "@freakycoder/react-native-header-view";

import Aboutuslogo from '../components/Aboutuslogo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { theme } from '../core/theme';

export default class Aboutus extends Component {
  constructor() {
    super()
    this.state = {
      page: "Aboutus",
    }
  }

  render() {
    return (
      <View style={styles.container}>

      <ModernHeader  text="About Us"/>

      <Background>

      <Image source={require('../assets/tdc300.png')} style={styles.image} />
   <Text style = {styles.info}> The Digital Crew is a web innovation agency in Mumbai that drives business growth for the clients.</Text>

      </Background>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start'  ,

  },
  info :{
    color: '#FFFFFF',
    fontSize : 20,
     fontWeight : "200",
     paddingTop: 20


  },
  image: {
    width: 250,
    height: 128,
    marginBottom:150
  },

});
