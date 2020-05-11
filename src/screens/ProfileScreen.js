import React , {Component,useState} from 'react';  
import {StyleSheet,TouchableOpacity, Text, Image, Platform,
  ScrollViewView , View ,Animated,ScrollView ,FlatList , Modal}from 'react-native';  
import { createBottomTabNavigator, navigation , navigate } from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import { ModernHeader } from "@freakycoder/react-native-header-view";
import Button from '../components/Button';
import { StackNavigator } from 'react-navigation';
import AnimateNumber from 'react-native-animate-number';
import FastImage from 'react-native-fast-image';

  
export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { showGrid: false };
  }
  clickHandler() {
    alert(this.state.showGrid);
    //this.setState({showGrid:!this.state.showGrid});
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'https://unsplash.it/400/400?image=' + (i + 1) };
    });
    that.setState({
      dataSource: items,
    });
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <ModernHeader text ="Profile"/>
          <View style={styles.header}></View>
          <Image style={styles.avatar}source={require('../assets/reactrotate.png')}/>
          <Text style = {{fontSize:20, marginTop:175, marginLeft: 30 , position: 'absolute',
    color:'#FFFFFF' }} >Deven Nazare</Text>


          <Text style = {{fontSize:15, marginTop:125, marginLeft: 177 , position: 'absolute',
    color:'#FFFFFF' }} >Followers</Text>

    <AnimateNumber  style = {{fontSize:25, marginTop:90, marginLeft: 180 , position: 'absolute',
    color:'#FFFFFF' }} value={1036} countBy='10' timing="easeIn" />


    <Text style = {{fontSize:15, marginTop:125, marginLeft: 286 , position: 'absolute',
    color:'#FFFFFF' }} >Posts</Text>

    <AnimateNumber  style = {{fontSize:25, marginTop:90, marginLeft: 290 , position: 'absolute',
    color:'#FFFFFF' }} value={69} countBy='10' timing="easeIn" />


          <View style={styles.body}>
            <View style={styles.bodyContent}>
              
              <Text style={styles.name}>Deven Nazare</Text>
              <Text style={styles.info}>iOS developer</Text>
              <Text style={styles.description}>Hola ! Messi</Text>
              <Text style={styles.name}>Deven Nazare</Text>
              <Text style={styles.info}>iOS  developer</Text>
              <Text style={styles.description}>Hola ! Ronaldo</Text>
              <Text style={styles.name}>Deven Nazare</Text>
              <Text style={styles.info}>iOS  developer</Text>
              <Text style={styles.description}>Hola ! Ronaldo</Text>
              <Text style={styles.name}>Deven Nazare</Text>
              <Text style={styles.info}>iOS  developer</Text>
              <Text style={styles.description}>Hola ! Messi</Text>
              <Text style={styles.name}>Deven Nazare</Text>
              <Text style={styles.info}>iOS  developer</Text>
              <Text style={styles.description}>Hola ! Messi</Text>
              <Text style={styles.name}>Deven Nazare</Text>
              <Text style={styles.info}>iOS  developer</Text>
              <Text style={styles.description}>Hola ! Messi</Text>
              <Text style={styles.name}>Deven Nazare</Text>
              <Text style={styles.info}>iOS  developer</Text>
              <Text style={styles.description}>Hola ! Messi</Text>
              
            </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#000000",
    height:130,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    
    position: 'absolute',
    marginTop:66,
    marginLeft: 30
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {

    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  textLarge: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    height: 70,
    width: 100,
    marginRight: 10,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});
 
  
  