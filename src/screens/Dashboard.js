import React from 'react';  
import {StyleSheet, Text, View,Animated , Easing,ActivityIndicator, Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer, SceneView} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import ProfileScreen from './ProfileScreen';
import Search from './Search';
import Messages from './Messages';
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { ScrollView } from 'react-native-gesture-handler';



 class Dashboard extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        isLoading: true,
        dataSource : null,
      }
    }
    componentDidMount(){
      return fetch ('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => response.json())
      .then ((responseJson)=> {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        })

      })
      .catch((error) => {
        console.log(error)
      });

    }
 

  render() {
    if (this.state.isLoading){
      return(
        <View style={styles.container2}>
          <ActivityIndicator/>
        </View>


      )
    }

    else{
      let data = this.state.dataSource.map((val,key) => {
        return (
        
        <View key = {key} style ={styles.item }>
                    <Text style = {{fontWeight: '200',fontSize: 20 , }}> Sr No .{val.id}</Text>

          <Text style = {{paddingTop: 20, fontWeight: 'bold'}}>Name :{val.employee_name}</Text>
          <Text style = {{fontSize: 30 , fontWeight: '200',paddingTop: 30}} >  Salary: {val.employee_salary}</Text>
       
        </View>
        );

      });


      return(        <ScrollView>

        <View style ={styles.container2}>
                  <ModernHeader  style ={styles.header} text="Home" />
                {data}

        </View>
        </ScrollView>
      );
    }

 


    return (
     
      <View style={styles.container}>  
        <ModernHeader  style ={styles.header} text="Home" />

       
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

  item :{
    flex :1 ,
    alignSelf: 'stretch',
    alignItems: 'center'  ,
      backgroundColor: '#FFFFFF',
      margin :10 ,
      borderBottomWidth: 1 ,
      borderBottomColor : '#eeeeee'
  },

  container2 :{
    flex: 1,  
    alignItems: 'center'  ,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center'

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
    initialRouteName: "Home",  
    activeColor: '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },  
  },  
);  

export default createAppContainer(TabNavigator);


