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
    import {getAllCuisines} from "../services/mock/CuisineService";
    import {getAllRestaurants} from "../services/mock/RestaurantService";
    // import {getAllRestaurants} from "../services/mock/RestaurantService";

    const {height,width} = Dimensions.get('window');
    export default class Home  extends Component {
      constructor(props){
        super(props);
        this.state={
          cuisines:[],
            restaurants:[],

        }
      }
        async componentWillMount() {
            let cuisines = await getAllCuisines();
            let restaurants = await getAllRestaurants();
            //console.log("Restaurants:" + JSON.stringify(restaurants));
            this.setState({
                cuisines: cuisines,
                restaurants: restaurants,
            });
            // console.log(this.state.cuisines);
            // console.log(this.state.restaurants);
        }

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
                    <Text style={{fontSize: 16,fontWeight:'600'}}>Popular cuisines around you <AntDesign name={'arrowright'} size={20}/></Text>

                  </View>
                    <View style={styles.card}>

                        <FlatList data={this.state.cuisines}
                                  horizontal={true}
                                  showsHorizontalScrollIndicator={false}
                                  style={{flex: 1}}
                                  keyExtractor={(data) => data.id + ""}
                                  renderItem={({item}) => <CategoryCard  navigation={this.props.navigation} cuisine={item}/>}/>







                    </View>
                    <View style={styles.introducingTextWrapper}>
                      <Text style={styles.introducingText}>Introducing new Restaurants</Text>
                      <Text style={{fontSize : 16,color: '#b63838'}}>A new Selection of restaurants verified for quality and ambience</Text>


                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                      <View style={styles.imageNewRestaurantWrapper}>
                        <Image  style={styles.imageNewRestaurant}  source={require("../assets/restaurant1.jpg")}/>
                      </View>
                      <View style={styles.imageNewRestaurantWrapper}>
                        <Image  style={styles.imageNewRestaurant}  source={require("../assets/restaurant2.jpg")}/>
                      </View>
                      <View style={styles.imageNewRestaurantWrapper}>
                        <Image  style={styles.imageNewRestaurant}  source={require("../assets/restaurant3.jpg")}/>
                      </View>
                      <View style={styles.imageNewRestaurantWrapper}>
                        <Image  style={styles.imageNewRestaurant}  source={require("../assets/restaurant4.jpg")}/>
                      </View>

                    </ScrollView>

                    </View>

                  <View style={{marginTop: 40}}>
                    <Text style={styles.gridHeading}>Restaurants around the city</Text>
                    <FlatList contentContainerStyle = {styles.gridComponentWrapper}
                        data={this.state.restaurants}
                        // numColumns={2}
                        keyExtractor={(data) => data.id + ""}
                        renderItem={({item}) => <HomeGrid  navigation={this.props.navigation} restaurant={item}/>}/>

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
        height: 80,
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
      fontSize: 20,
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
        fontSize:20,
        fontWeight:'700',
      },
      imageNewRestaurant:{
        flex:1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dddddd',
        marginLeft: 5,
      },
      imageNewRestaurantWrapper:{
        width: width-40,
        height:200,
        marginTop: 20
      },
      gridHeading:{
        fontSize: 20,
        fontWeight:'700',
        paddingHorizontal:20

      },
      gridComponentWrapper:{
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        flexWrap:'wrap',
          // numColumns: 2,
        justifyContent: 'space-between',
      },

    });