import React, { Component } from 'react';

import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,ImageBackground} from 'react-native';
import {responsiveWidth,responsiveFontSize,responsiveHeight} from "react-native-responsive-dimensions";
// import styles from './styles';
import StarRating from 'react-native-star-rating';
// import Hr from "react-native-hr-component";
// import Hr from "react-native-hr";
import {Badge} from "react-native-elements";
export default class RestaurantDetails  extends Component {

  render() {
    const item = this.props.navigation.getParam('item', 'NO-NAME');
    const imageUrl=  item.thumbnail;
    return (

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageBackground source ={{uri: item.thumbnail}} style={styles.restaurantImage}/>
          </View>
            <View style={styles.infoContent}>

              <View style={{flex: 1, alignItems: 'flex-start',flexDirection: "column",}}>

                <Text style={styles.name}> {item.name}</Text>
                <Text style={styles.cuisines}>{item.cuisines}</Text>


                <View style={styles.rating}>
                  <StarRating

                      fullStarColor={'#b63838'}
                      disable={true}
                      maxStars={5}
                      rating={item.rating}
                      starSize={20}
                  />
                </View>
                <View
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      alignItems: 'stretch',
                      width: responsiveWidth(100),
                      borderBottomColor: '#bbb',
                      borderBottomWidth: 0.8,
                      backgroundColor: "#bbb",
                      color: "#bbb",
                    }}
                />

              <View style={{flexDirection: "column", justifyContent:"space-around",alignItems:"flex-start",marginBottom: 15,}}>
                <Text style={{color: "#666",fontSize: 14,marginLeft:38}}>ADDRESS: </Text>
               <Text style={styles.Address}>{item.Address}, </Text>
                <Text style={styles.Address}>{item.city}, {item.country}</Text>


              </View>
                <View style={{flexDirection: "column", justifyContent:"space-around",alignItems:"flex-start",marginBottom: 15}}>
                  <Text style={{color: "#666",fontSize: 14,marginLeft:38}}>AVERAGE COST: </Text>
                  <Text style={styles.price}>{item.price} for two people approx</Text>
                </View>
                <View style={{flexDirection: "column", justifyContent:"space-around",alignItems:"flex-start",marginBottom: 15}}>
                  <Text style={{color: "#666",fontSize: 14,marginLeft:38}}>CONTACT NO: </Text>
                  <Text style={styles.contactNo}>{item.contactNo}</Text>
                </View>
              </View>
            </View>
        </View>








    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  imageContainer:{
    flex: 1,
    flexDirection:'column',
    // justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  restaurantImage:{

    width: responsiveWidth(100),
    height: responsiveHeight(50),
   // resizeMode: 'contain',
   //  borderRadius: 5,
   //  borderWidth: 10,
   //  borderColor: '#111',

  },infoContent:{
    flex: 2,


    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  name:{
    marginTop: 30,
    marginLeft: 30,
    paddingBottom: 10,
    fontSize: 26,
    fontWeight: '600',
    color: "#222",
    alignItems: 'stretch',
  },
  rating:{
    marginLeft: 38,


  },
  cuisines:{
    marginLeft: 38,
    fontSize: 15,
    paddingBottom: 10,
    color: "#444",
  },
  Address:{

      marginLeft: 38,
      fontSize: 15,
    fontWeight: "700",
      // paddingBottom: 10,
    color: "#444",

  },
  price:{

    marginLeft: 38,
    fontSize: 15,
    fontWeight: "700",
    // paddingBottom: 10,
    color: "#444",

  },
  contactNo:{

    marginLeft: 38,
    fontSize: 15,
    fontWeight: "700",
    // paddingBottom: 10,
    color: "#444",

  },
  badge:{

  }


})
