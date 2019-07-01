
import React,{Component} from 'react';
import { StyleSheet, Text,View, Dimensions,Image,FlatList,ActivityIndicator,SafeAreaView,Platform} from 'react-native';
//import Header from "../components/Header"
import {createAppContainer,createDrawerNavigator,createStackNavigator,createBottomTabNavigator} from "react-navigation";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Search from"./screens/Search";
import Icon from 'react-native-vector-icons/Ionicons';
const pages = createBottomTabNavigator({
  Explore: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" color={tintColor} size={25}/>
      )
    }
  },

  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => (
          <Icon name="ios-search" color={tintColor} size={25}/>
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      topBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={24}/>
      )
    }
  },
},{tabBarOptions:{
  activeTintColor: '#b63838',
    inactiveTintColor:'grey',
    style:{
    backgroundColor: 'white',
      borderWidth: 1,
      shadowOffset: {width: 5,height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5,


    }
  }


  // details: {
  //   screen: details
  // },
});

const Container = createAppContainer(pages);
export default class App extends React.Component {
  render(){
    return (
        <View style={styles.container}>
          <Container/>
        </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    //Other alternative for iphone X notch
    //  paddingTop: (Platform.OS === 'ios' && height === 812) ? 40 : 20,
    // paddingTop: (Platform.OS === 'android' ) ? 40 : 'auto',
    //alignItems: 'stretch',
    //justifyContent: 'flex-start',
    //backgroundColor: '#F7F7F7',
  },



});
