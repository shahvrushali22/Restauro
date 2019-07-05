import React,{Component} from "react";

import { StyleSheet, View , Text,TextInput,SafeAreaView} from 'react-native';
import {Icon} from "react-native-elements";
// import {SafeAreaView} from "react-native-web";

export default class Header extends Component {
    render() {
        return (
                <View style={styles.headerContainer}>
                <Icon
                    raised
                    name='align-left'
                    type='font-awesome'
                    color='#b63838'
                    onPress={() => this.props.navigation.openDrawer()} />
            </View>


        );
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        display:"flex",
        flexDirection: "row",
        paddingVertical: 10,
        backgroundColor: "#b63838",
    },
});