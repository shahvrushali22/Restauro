import React, { Component } from 'react';

import { View,Text,StyleSheet } from 'react-native';

// import styles from './styles';

export default class RestaurantDetails  extends Component {
  render() {
    return (
        <View style={styles.container}><Text>Hello details</Text></View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})