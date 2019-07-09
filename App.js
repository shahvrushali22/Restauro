
import React,{Component} from 'react';
import { StyleSheet, Text,View, Dimensions,Image,FlatList,ActivityIndicator,SafeAreaView,Platform} from 'react-native';
//import Header from "../components/Header"
import {createAppContainer,createDrawerNavigator,createStackNavigator,createBottomTabNavigator} from "react-navigation";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Search from"./screens/Search";
import Settings from "./screens/Settings";
import Logout from "./screens/Logout";
import Icon from 'react-native-vector-icons/Ionicons';
import RestaurantDetails from "./screens/RestaurantDetails";
import RestaurantList from "./screens/RestaurantList";
import {AntDesign} from "@expo/vector-icons";
const ScreensDrawer = createDrawerNavigator({
  screen1: {
    screen: Profile,
    navigationOptions:{
      drawerLabel: "Profile"
    }
  },
  screen2: {
    screen: Settings,
    navigationOptions:{
      drawerLabel: "Settings"
    }
  },
  screen3: {
    screen: Logout,
    navigationOptions:{
      drawerLabel: "Logout"
    }
  },

});
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,


  },
  RestaurantList: {
    screen: RestaurantList,

  },
  RestaurantDetails: {
    screen: RestaurantDetails,
    navigationOptions: {
      // headerTransparent: true,
      // headerLeft: <AntDesign style={{ color: "#fff",
      //   paddingLeft: 20,
      //   fontWeight: "700",}}  name="caretleft" size={32} />
    },
  }
});




const pages = createBottomTabNavigator({
  Explore: {
    screen: HomeStack,
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
    screen: ScreensDrawer,
    navigationOptions: {
      topBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
          <Icon name="ios-person" color={tintColor} size={30}/>
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
  goBackIcon:{


  }



});
