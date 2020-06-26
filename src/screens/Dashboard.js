import React from 'react';  
import {StyleSheet, Text, View,Animated , Easing,ActivityIndicator,Image,Component} from 'react-native';  
import { createBottomTabNavigator, createAppContainer, SceneView} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import ProfileScreen from './ProfileScreen';
import Search from './Search';
import Messages from './Messages';
import Aboutus from './Aboutus';
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { ScrollView } from 'react-native-gesture-handler';
import {Card,ListItem} from 'react-native-elements';
import Button from '../components/Button';
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


this.state = {
  country: 'uk'
}
//Pie chart data
const data = {
  labels: ["THE", "DIGITAL", "CREW"], // optional
  data: [0.4, 0.6, 0.8]
}
const screenWidth = Dimensions.get("window").width;

//Line Chart Data
const data2 = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],

    }
  ],
};
const chartConfig = {
  backgroundColor: "#e26a00",
  backgroundGradientFrom: "#fb8c00",
  backgroundGradientTo: "#ffa726",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(33,47 ,60, ${opacity})`,  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
 class Dashboard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Source Listing",
      headerStyle: {backgroundColor: "#000"},
      headerTitleStyle: {textAlign: "center",flex: 1}
     };
    };
    handleLogin = () => {
       this.props.navigation.navigate('Profile1')
         
          
    }
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        dataSource:[]
       };
     }
   
    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
         loading: false,
         dataSource: responseJson
        })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
      }
 

  render() {
    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
        <ModernHeader  text="Home"/>

          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}


      return(        

<View style = {styles.container}>
<ModernHeader  text="Home"/>
<DropDownPicker style = { {alignItems : "center"
   , justifyContent :"center"}}
   items={this.state.dataSource.map(item=> ({label:item.name,value:item.address.city}))}

    
    defaultValue={this.state.country}
    containerStyle={{height: 50,width:375}}
   
    style={{backgroundColor: '#fafafa',borderWidth: 4,
    borderColor: "#ffa726",
    borderRadius: 6,fontSize: 30}}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    searchable={true}
    searchablePlaceholder="Search..."
    searchableError="Not Found"
    onChangeItem={item => this.setState({
        country: item.value
    },
    console.log(item)
    
    )
  
  } 
    />

<ScrollView style={{paddingTop:10}}>
  <Text style={styles.chartlabel}>Bezier Line Chart</Text>
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            10,30,43,2,45,109
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 12,
      borderColor: '#E74C3C',
      borderWidth:2
    }}
  />


  <Text style={styles.chartlabel}> Pie chart</Text>
  <ProgressChart
  data={data}
  width={screenWidth}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
  style={{borderRadius:12 , borderColor: '#E74C3C',
  borderWidth:2}}
/>
<Text style={styles.chartlabel}> Line Chart</Text>
<LineChart
  data={data2}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  style={{
    marginVertical: 8,
    borderRadius: 12,
    borderColor: '#E74C3C',
    borderWidth:2

  }}
/>
</ScrollView>
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

  },
  chartlabel:{
    alignItems: 'center'  ,
    alignSelf: "center",
    flex: 2,
    fontSize: 25,
    color: "#8E44AD",
    fontWeight:"700"
  }
}); 








 const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: { screen: Dashboard,  
          navigationOptions:{  
              tabBarLabel:'Dashboard',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-desktop'}/>  
                  </View>),  
                barStyle: { backgroundColor: '#000000' },  
                inactiveColor: '#FFFFFF',  
                activeColor: '#ffa726',  


          }  
      },  
    //   Search : {  
    //     screen: Search,  
    //     navigationOptions:{  
    //         tabBarLabel:'Search',  
    //         tabBarIcon: ({ tintColor }) => (  
    //             <View>  
    //                 <Icon style={[{color: tintColor}]} size={25} name={'ios-search'}/>  
    //             </View>),  
    //             barStyle: { backgroundColor: '#000000' },  
    //             inactiveColor: '#FFFFFF',  
    //             activeColor: '#00FFFF', 
    //     }  
    // }, 
      
      Image: { screen: Messages,  
          navigationOptions:{  
              tabBarLabel:'Contact Us',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-chatboxes'}/>  
                  </View>),  
              barStyle: { backgroundColor: '#000000' },  
              inactiveColor: '#FFFFFF',  
              activeColor: '#ffa726', 
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
            activeColor: '#ffa726', 
           }  
       }, 
       About: { screen: Aboutus,  
        navigationOptions:{  
            tabBarLabel:'About us',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                </View>),  
            barStyle: { backgroundColor: '#000000' },  
            inactiveColor: '#FFFFFF',  
            activeColor: '#ffa726', 
           }  
       }, 
      
  },  
  {  
    initialRouteName: "Home",  
    activeColor: '#ffa726',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },  
  },  
);  

export default createAppContainer(TabNavigator);


