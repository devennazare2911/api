import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import ProfileScreen from './ProfileScreen';
import Search from './Search';
import Messages from './Messages';
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { GorgeousHeader } from "@freakycoder/react-native-header-view";
import { AppleHeader } from "@freakycoder/react-native-header-view";


 class Dashboard extends React.Component {  
  render() {  
    return (  
    <ModernHeader  text="Home"/>


    );  
  }  
}  








const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center'  
  },  
  header: {
    flex: 1,
    fontSize: 40,
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
    initialRouteName: "Home",  
    activeColor: '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },  
  },  
);  

export default createAppContainer(TabNavigator);


