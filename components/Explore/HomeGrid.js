import React, { Component } from 'react';

import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';

import StarRating from 'react-native-star-rating';

const {height,width} = Dimensions.get('window');
export default class  extends Component {
  render() {

    return (

        <View style={styles.gridComponent}>
            <View style={{flex:1}}>
                <Image
                    style={{flex:1,width:null,height:null,resizeMode:'cover',borderRadius: 15}}
                    source ={this.props.imageUri}></Image>
            </View>
            <View style={{flex: 1, alignItems: 'flex-start',justifyContent: 'space-around',paddingLeft:10}}>
                <Text style={{fontSize: 12,color:'#b63838'}}>{this.props.type}</Text>
                <Text style={{fontSize: 14,fontWeight: 'bold'}}>{this.props.name}</Text>
                <Text style={{fontSize:12}}>{this.props.price}Rs</Text>
                <StarRating
                    disable={true}
                    maxStars={5}
                    rating={this.props.rating}
                    starSize={12}
                />
            </View>
        </View>

    );
  }
}
const styles = StyleSheet.create({
    gridComponent:{
        width: width/2 - 30,
        height: height/2 -100,
        borderWidth: 0.5,
        borderColor: '#dddddd',
       marginBottom: 20,
        borderRadius: 20,
    }
});