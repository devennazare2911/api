import React , {Component} from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { ModernHeader } from "@freakycoder/react-native-header-view";

export default class ProfileScreen extends Component {  
    render() {  
      return (  
        <ModernHeader  text="Profile"/>

      );  
    }  
  }  
  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  

