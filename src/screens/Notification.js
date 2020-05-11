import React, { memo , Component } from 'react';
import Background from '../components/Background';
import HomeBackground from '../components/HomeBackground';
import Tabbar from 'react-native-tabbar-bottom'
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { theme } from '../core/theme';

export default class Notification extends Component {
  constructor() {
    super()
    this.state = {
      page: "Notification",
    }
  }

  render() {
    return (
      <View style={styles.container}>

        {
          // if you are using react-navigation just pass the navigation object in your components like this:
          // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
        }
        {this.state.page === "Dashboard" && <Text>Dashboard</Text>}
        {this.state.page === "Profile" && <Text>Profile</Text>}
        {this.state.page === "Message" && <Text>Message</Text>}
        {this.state.page === "Notification" && <Text>Notification</Text>}
        {this.state.page === "Search" && <Text>Search</Text>}

        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "HomeScreen",
              icon: "home",
            },
            {
              page: "NotificationScreen",
              icon: "notifications",
              badgeNumber: 11,
            },
            {
              page: "ProfileScreen",
              icon: "person",
            },
            {
              page: "ChatScreen",
              icon: "chatbubbles",
              badgeNumber: 7,
            },
            {
              page: "SearchScreen",
              icon: "search",
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
