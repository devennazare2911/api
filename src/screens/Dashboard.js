import React from 'react';  
import {StyleSheet, Text, View,Animated , Easing, Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import ProfileScreen from './ProfileScreen';
import Search from './Search';
import Messages from './Messages';
import { ModernHeader } from "@freakycoder/react-native-header-view";



 class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spinAnim: new Animated.Value(0) }
  }

 componentDidMount(){
 Animated.loop(Animated.timing(
    this.state.spinAnim,
  {
    toValue: 1,
    duration: 1300,
    easing: Easing.linear,
    useNativeDriver: true
  }
)).start();
 }

  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
     
      <View style={styles.container}>  
        <ModernHeader  style ={styles.header} text="Home" />

        <Animated.Image
        style={{alignItems: 'center' ,height:200, width: 200,transform: [{rotate: spin}] }}
        source={require('../assets/reactrotate.png')} />
        <Text > Hello </Text>
      </View>

    );
  }
}








const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      alignItems: 'center'  ,
      backgroundColor: '#FFFFFF',

  },  
  image: {  
    flex: 1,  
    alignItems: 'center'  ,
    },  

  header: {
    flex: 2,
    paddingTop: 50,

  }
}); 








 const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: { screen: Dashboard,  
          navigationOptions:{  
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
                barStyle: { backgroundColor: '#000000' },  
                inactiveColor: '#FFFFFF',  
                activeColor: '#00FFFF',  


          }  
      },  
      Search : {  
        screen: Search,  
        navigationOptions:{  
            tabBarLabel:'Search',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-search'}/>  
                </View>),  
                barStyle: { backgroundColor: '#000000' },  
                inactiveColor: '#FFFFFF',  
                activeColor: '#00FFFF', 
        }  
    }, 
      
      Image: { screen: Messages,  
          navigationOptions:{  
              tabBarLabel:'Inbox',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-chatboxes'}/>  
                  </View>),  
              barStyle: { backgroundColor: '#000000' },  
              inactiveColor: '#FFFFFF',  
              activeColor: '#00FFFF', 
          }  
      },  
      Profile1: { screen: ProfileScreen,  
        navigationOptions:{  
            tabBarLabel:'Profile',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                </View>),  
            barStyle: { backgroundColor: '#000000' },  
            inactiveColor: '#FFFFFF',  
            activeColor: '#00FFFF', 
           }  
       }, 
      
  },  
  {  
    initialRouteName: "Image",  
    activeColor: '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },  
  },  
);  

export default createAppContainer(TabNavigator);


