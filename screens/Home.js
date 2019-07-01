    import React, { Component } from 'react';
    import {responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
    import {View,
            Text,
            StyleSheet,
            SafeAreaView,
            TextInput,
            ScrollView,
            Image,Dimensions,FlatList} from 'react-native';


    import Icon from 'react-native-vector-icons/Ionicons';
    import {MaterialIcons,AntDesign} from "@expo/vector-icons";
    import CategoryCard from "../components/Explore/CategoryCard";
    import HomeGrid from "../components/Explore/HomeGrid";

    const {height,width} = Dimensions.get('window');
    export default class Home  extends Component {
      constructor(props){
        super(props);
        this.state={
          cuisines:[],
          NewRestaurants:[],
        }
      }
      async componentWillMount() {
        this.fetchCuisines();
        this.fetchNewRestaurants();
      }

      async fetchCuisines(){

        let response = await fetch('https://developers.zomato.com/api/v2.1/cuisines?city_id=20', {
          method: 'GET',
          headers: new Headers({
            'Accept': 'application/json',
            'user-key': '71d62dd3edfeccf28415b09d1b7faee9'
          }),
        });
        let responseJson = await response.json();

        // console.log(responseJson.cuisines);
        //let cuisines = this.state.cuisines;
        this.setState({

          cuisines: responseJson.cuisines,


        });
        // console.log(this.state.cuisines);
      }
      async fetchNewRestaurants(){

        let response = await fetch('https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&start=1&count=4', {
          method: 'GET',
          headers: new Headers({
            'Accept': 'application/json',
            'user-key': '71d62dd3edfeccf28415b09d1b7faee9'
          }),
        });
        let responseJson = await response.json();


        //let cuisines = this.state.cuisines;
        this.setState({

          NewRestaurants: responseJson.restaurants,


        });
        // console.log(this.state.cuisines);
      }
      renderCuisines({item}){
        // console.log(item.cuisine.cuisine_name);
        return (

            <CategoryCard imageUri = {require('../assets/chinese.jpg')} name={item.cuisine.cuisine_name}/>

        );
      }
      renderNewRestaurants({item}){

        return (
            <View style={styles.imageNewRestaurantWrapper}>
              <Image  style={styles.imageNewRestaurant}  source={{uri: item.restaurant.thumb}}/>
            </View>


        );
      }
      renderCard(){
        return (
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                  data={this.state.cuisines}
                  //Here the data is wrapped within a property with key item
                  renderItem={this.renderCuisines.bind(this)}>

           </FlatList>
        )}
      renderImage(){
        return (
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.NewRestaurants}
                //Here the data is wrapped within a property with key item
                renderItem={this.renderNewRestaurants.bind(this)}>

            </FlatList>
        )}

      render() {
        return (
            <SafeAreaView style={{flex:1}}>

              <View style={styles.headerContainer}>
                <View style={styles.header}>
                <Icon style={styles.iconStyle} name="ios-search" size={20}/>
                <TextInput style={styles.headerText}
                           placeholder ="Search Your favourite restaurant"
                           placeholderTextColor= "grey" />
                </View>
              </View>
                <ScrollView
                    scrollEventThrottle={16}
                >
                  <View style={styles.findTextContainer}>
                    <Text style={styles.findText}>What can we help you find,<Text style={{color:'#b63838'}}>Vrushali?</Text></Text>
                    <Text style={{fontSize: 18,fontWeight:'600'}}>Popular cuisines around you <AntDesign name={'arrowright'} size={20}/></Text>

                  </View>
                    <View style={styles.card}>
                      {this.renderCard()}

                        {/*<CategoryCard imageUri = {require('../assets/home.jpg')} name={"Home"}/>*/}
                        {/*<CategoryCard imageUri = {require('../assets/experiences.jpg')} name={"Experiences"}/>*/}
                        {/*<CategoryCard imageUri = {require('../assets/restaurant.jpg')} name={"Restaurants"}/>*/}
                        {/*<CategoryCard imageUri = {require('../assets/home.jpg')} name={"Home"}/>*/}
                        {/*<CategoryCard imageUri = {require('../assets/experiences.jpg')} name={"Experiences"}/>*/}
                        {/*<CategoryCard imageUri = {require('../assets/restaurant.jpg')} name={"Restaurants"}/>*/}
                        {/*<CategoryCard imageUri = {require('../assets/experiences.jpg')} name={"Experiences"}/>*/}
                        {/*<CategoryCard imageUri = {require('../assets/home.jpg')} name={"Home"}/>*/}


                    </View>
                    <View style={styles.introducingTextWrapper}>
                      <Text style={styles.introducingText}>Introducing new Restaurants</Text>
                      <Text style={{fontSize : 18,color: '#b63838'}}>A new Selection of restaurants verified for quality and ambience</Text>


                      {/*{this.renderImage()}*/}




                    </View>

                  <View style={{marginTop: 40}}>
                    <Text style={styles.gridHeading}>Restaurants around the city</Text>
                    <View style={styles.gridComponentWrapper}>
                      <HomeGrid imageUri = {require("../assets/home.jpg")}
                                name={"The Cozy Place"}
                                type={"PRIVATE ROOM - 2 BEDS"}
                                price={4000}
                                rating={4}
                      />
                      <HomeGrid imageUri = {require("../assets/experiences.jpg")}
                                name={"The Cozy Place"}
                                type={"PRIVATE ROOM - 2 BEDS"}
                                price={4000}
                                rating={4}/>
                      <HomeGrid imageUri = {require("../assets/restaurant.jpg")}
                                name={"The Cozy Place"}
                                type={"PRIVATE ROOM - 2 BEDS"}
                                price={4000}
                                rating={4}/>
                      <HomeGrid imageUri = {require("../assets/home.jpg")}
                                name={"The Cozy Place"}
                                type={"PRIVATE ROOM - 2 BEDS"}
                                price={4000}
                                rating={4}/>
                    </View>
                  </View>
                </ScrollView>

            </SafeAreaView>
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


      },
      headerContainer:{
        height: 100,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        paddingTop: responsiveHeight(2.5)

      },
      header:{

        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 0,height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,


      },
      headerText:{
        flex: 1,
        fontWeight: '700',
        backgroundColor: 'white',
        paddingLeft: 10,

      },
      findText:{
      fontSize: 24,
        fontWeight: '700',
        // paddingHorizontal: 20,
        paddingBottom: 10,

    },
      findTextContainer:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-start',
        backgroundColor: 'white',
    paddingTop: 10,
        paddingHorizontal: 20,
      },
      card:{
        height: 130,
        marginTop: 20,

      },

      introducingTextWrapper:{
          marginTop: 25,
        paddingHorizontal: 20,
      },
      introducingText:{
        fontSize:24,
        fontWeight:'700',
      },
      imageNewRestaurant:{
        flex:1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
      },
      imageNewRestaurantWrapper:{
        width: width-40,
        height:200,
        marginTop: 20
      },
      gridHeading:{
        fontSize: 24,
        fontWeight:'700',
        paddingHorizontal:20

      },
      gridComponentWrapper:{
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
      },

    });