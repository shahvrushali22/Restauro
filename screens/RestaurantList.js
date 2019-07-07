import React, { Component } from 'react';

import { View,Text,StyleSheet,FlatList,Dimensions,Image,TouchableOpacity } from 'react-native';

import {getAllRestaurants, getAllRestaurantByCuisine} from "../services/mock/RestaurantService";
import {Badge,Bubble,Spinner} from 'nachos-ui'
import {getAllCuisines} from "../services/mock/CuisineService";

// import styles from './styles';
const {width,height} = Dimensions.get('window');

export default class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],

    };
  }
  async componentWillMount() {

    const cuisineName = this.props.navigation.getParam('cuisineName', 'NO-NAME');

    let restaurants = await getAllRestaurantByCuisine(cuisineName);

    this.setState({
      restaurants: restaurants,

    });

// console.log(this.state.restaurants);
  }
  renderRestaurants({item}){

    return (

        <TouchableOpacity onPress = {() => this.props.navigation.navigate('RestaurantDetails',)}>


          <View style={styles.userContainer}>
            {/*<Header navigation ={this.props.navigation}/>*/}
            <Image style={styles.profilePicture} source={{uri: item.thumbnail}}/>
            <View style={styles.userInfoContainer} >
              {/*<TouchableOpacity style ={styles.nameView} onPress={() => { this.props.navigation.navigate('example')}}><Text  style={styles.name}>{item.restaurant.name}</Text></TouchableOpacity>*/}
              <Text  style={styles.name}>{item.name}</Text>
              <Text style={styles.city}>{item.city}</Text>
              <View style = {styles.cuisineView}><Text style={styles.cuisine}>{item.cuisines}</Text></View>
              {/*<Text styleex={styles.rating}><Text>4.9</Text></Text>*/}

            </View>
          </View>
        </TouchableOpacity>

    );
  }
  render() {
    return (
     <View style={styles.container}>
       <FlatList data={this.state.restaurants}
                      style={{flex: 1}}
                      keyExtractor={(data) => data.id + ""}
                      renderItem={this.renderRestaurants.bind(this)}/>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userContainer:{
    flexDirection:"row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    //Border ke liye
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: "#fff"},


  profilePicture: {
    width: parseInt((width * 20) / 100),
    height: parseInt((width * 20) / 100),
    borderRadius: 20,

  },
  userInfoContainer:{
    paddingHorizontal: 15,
    alignSelf: 'stretch',
    justifyContent: 'space-around',



  },
  cuisineView:{
    flexDirection: "row",
  },

  nameView:{
    flexDirection: "row",
  },
  cuisine:{
    fontSize: 15,
    fontWeight: '600',
    color: '#2D2D2D',
    alignItems: "stretch",
    paddingRight:60,
  },
  name: {

    fontSize: 18,
    fontWeight: '600',
    color: '#CB202D',
    alignItems: "stretch",

  },
  city: {
    fontSize: 16,
    color: '#BCBCBC',
    fontWeight: '600'
  },
  loadingContainer:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },

});