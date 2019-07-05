import React, { Component } from 'react';

import { View,Text } from 'react-native';
import Header from "../components/Profile/Header";
// import styles from './styles';

export default class Settings extends Component {
  render() {
    return (
        <View>
          <Header navigation={this.props.navigation}></Header><Text>Settings</Text></View>
    );
  }
}