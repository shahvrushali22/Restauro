import React, { Component } from 'react';

import {Image, ScrollView, Text, View,SafeAreaView,StyleSheet} from 'react-native';
// import {AntDesign} from "@expo/vector-icons";
// import styles from './styles';

export default class CategoryCard  extends Component{
    render() {
        return (
            <View style={styles.horizontalScrollCard}>
                <View style={{flex:2}}>
                    <Image
                        source={this.props.imageUri}
                        style={styles.horizontalScrollCardImage}
                    />
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.horizontalScrollCardText}>{this.props.name}</Text>
                    {/*<AntDesign name={'rightcircle'} size={15} style={{color: "#b63838"}}></AntDesign>*/}
                </View>
            </View>

        );
    }
}
const styles =StyleSheet.create({

    horizontalScrollCard:{

        height: 130,
        width: 130,

        borderWidth: 1,
        borderColor: '#dddddd',
        marginLeft: 20,
        borderRadius: 15,

    },
    horizontalScrollCardImage:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    horizontalScrollCardText:{
        paddingLeft: 15,
        paddingRight:10,
        // paddingTop:10,
        fontSize: 15,
        fontWeight: '700',
        color: '#b63838'

    }
});