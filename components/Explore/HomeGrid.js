import React, { Component } from 'react';

import {Image, Text, View, StyleSheet, Dimensions,TouchableOpacity,TouchableWithoutFeedback,TouchableHighlight,TouchableNativeFeedback} from 'react-native';

import StarRating from 'react-native-star-rating';
// import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";
// import TouchableOpacity from "react-native-web/src/exports/TouchableOpacity";

const {height,width} = Dimensions.get('window');
export default class  extends Component {
  render() {

    return (

        <TouchableOpacity style={styles.gridComponent} onPress={()=> this.props.navigation.navigate('RestaurantDetails',{ item : this.props.restaurant })}>
            <View style={{flex:1}}>
                <Image
                    style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius: 5}}
                    source={{uri: this.props.restaurant.thumbnail}}/>
            </View>
            <View style={{flex: 1, alignItems: 'flex-start',justifyContent: 'space-around',paddingLeft:10}}>
                <Text style={{fontSize: 12,color:'#b63838'}}>{this.props.restaurant.cuisines}</Text>
                <Text style={{fontSize: 14,fontWeight: 'bold'}}>{this.props.restaurant.name}</Text>
                <Text style={{fontSize:12}}>{this.props.restaurant.price} Rs</Text>
                <StarRating
                    fullStarColor={'#b63838'}
                    disable={true}
                    maxStars={5}
                    rating={this.props.restaurant.rating}
                    starSize={12}
                />
            </View>
        </TouchableOpacity>

    );
  }
}
const styles = StyleSheet.create({
    gridComponent:{
        width: width/2 - 30,
        height: height/2 -100,
        borderWidth: 1,
        borderColor: '#dddddd',
       marginBottom: 20,
        borderRadius: 5,
    }
});