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

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      page: "Profile",
    }
  }

  render() {
    return (
      <View style={styles.container}>
                      <Logo />
                      <Text> Search </Text>

                      <Logo />
                      <Logo />

        {
          // if you are using react-navigation just pass the navigation object in your components like this:
          // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
        }
    {this.state.page === "Profile" && <Profile navigation={this.props.navigation}>Profile</Profile>}
        {this.state.page === "Dashboard" && <Dashboard navigation={this.props.navigation}>Dashboard</Dashboard>}
        {this.state.page === "Messages" && <Messages navigation={this.props.navigation}>Messages</Messages>}

        <Tabbar
          stateFunc={(tab) => {
            this.setState({page: tab.page})
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "Dashboard",
              icon: "home",
            },
            {
              page: "NotificationScreen",
              icon: "notifications",
              badgeNumber: 11,
            },
            {
              page: "Profile",
              icon: "person",
            },
            {
              page: "Messages",
              icon: "chatbubbles",
              badgeNumber: 7,
            },
            {
              page: "Search",
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
