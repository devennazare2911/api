import React , {Component} from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { SearchBar } from 'react-native-elements';


export default class SearchScreen extends React.Component {  
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };
  render() {  
    const { search } = this.state;

      return (  
        <SearchBar style = {{ paddingTop: 35 }}
        placeholder="Search Here..."
        onChangeText={this.updateSearch}
        value={search}
      />

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

