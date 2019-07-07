import React, { Component } from 'react';

import { View,Text,StyleSheet } from 'react-native';

// import styles from './styles';

export default class RestaurantDetails  extends Component {

  render() {
    const itemName = this.props.navigation.getParam('itemName', 'NO-NAME');

    return (
        <View style={styles.container}><Text>ok</Text></View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})