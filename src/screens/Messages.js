import React , {Component} from 'react';  
import {StyleSheet, Text, View,Button, ActivityIndicator,FlatList,TouchableOpacity} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { ModernHeader } from "@freakycoder/react-native-header-view";
import { ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import TextInput from '../components/TextInput';

import DropDownPicker from 'react-native-dropdown-picker';


export default class ImageScreen extends React.Component {  
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Source Listing",
      headerStyle: {backgroundColor: "#000"},
      headerTitleStyle: {textAlign: "center",flex: 1}
     };
    };
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
    FlatListItemSeparator = () => {
    return (
      <View style={{
         height: .5,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    );
    }
    renderItem=(data)=>
    <TouchableOpacity style={styles.list}>
    <Text style={styles.lightText}>{data.item.name}</Text>
    <Text style={styles.lightText}>{data.item.email}</Text>
    <Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity>
    render(){
     if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    return(
     <View style={styles.container}>
       <ModernHeader title = "Contact us " />





       <DropDownPicker
            style={{
                alignItems: "center"
                , justifyContent: "center"
            }}
            items={this.state.dataSource.map(item=> ({label:item.name,value:item.name}))}
            defaultValue={this.state.country}
            containerStyle={{ height: 50, width: 375 }}

            style={{
                backgroundColor: '#fafafa', borderWidth: 4,
                borderColor: "#ffa726",
                borderRadius: 6, fontSize: 30
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            searchable={true}
            searchablePlaceholder="Search..."
            searchableError="Not Found"
            onChangeItem={item => this.setState({
                country: item.value
            },
                console.log(item.value)
            )
            }
        />





     <FlatList
        data= {this.state.dataSource}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        renderItem= {item=> this.renderItem(item)}
        keyExtractor= {item=>item.id.toString()}
     />
    </View>
    )}
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff"
       },
      loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
       },
      list:{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
       }
    });