import React, { Component } from 'react';

import {View, Text, StyleSheet} from 'react-native';
import Header from "../components/Profile/Header";

import {Emitter} from "react-native-particles";
// import styles from './styles';

export default class Logout  extends Component {
  render() {
    return (

        <View style={styles.container}>
          <Header navigation={this.props.navigation}>

          </Header>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,


  },



});