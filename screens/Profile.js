import React, { Component } from 'react';

import {View, Text, StyleSheet} from 'react-native';

// import styles from './styles';

export default class Profile  extends Component {
    render() {
        return (
            <View style={styles.container}><Text>Profile</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        //Other alternative for iphone X notch
        //  paddingTop: (Platform.OS === 'ios' && height === 812) ? 40 : 20,
        // paddingTop: (Platform.OS === 'android' ) ? 40 : 'auto',
        //alignItems: 'stretch',
        //justifyContent: 'flex-start',
        //backgroundColor: '#F7F7F7',
    },
});