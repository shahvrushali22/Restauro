import React, { Component } from 'react';

import {Image, ScrollView, Text, View,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native';
import {Icon} from "react-native-elements";
// import {AntDesign} from "@expo/vector-icons";
// import styles from './styles';

export default class CategoryCard  extends Component{
    render() {
        return (
            <TouchableOpacity onPress = {() => this.props.navigation.navigate('RestaurantList')} >
                <View style={styles.horizontalScrollCard}>
                    <View style={{flex:2}}>
                        <Image
                            source={{uri: this.props.cuisine.image}}
                            style={styles.horizontalScrollCardImage}
                        />
                    </View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Text style={styles.horizontalScrollCardText}>{this.props.cuisine.name}</Text>
                        {/*<AntDesign name={'rightcircle'} size={15} style={{color: "#b63838"}}></AntDesign>*/}

                    </View>
                </View>
            </TouchableOpacity>

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
        borderRadius: 5,

    },
    horizontalScrollCardImage:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    horizontalScrollCardText:{
        // paddingLeft: 10,
        // paddingRight:10,

        // paddingTop:10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 15,
        fontWeight: '700',
        color: '#b63838'

    },
    viewHotels:{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 5,
    }
});