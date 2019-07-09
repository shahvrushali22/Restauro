import React from 'react';
import {
    ScrollView,
    View,
    TextInput,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import {filterRestaurant} from "../services/mock/RestaurantService";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
const {width,height} = Dimensions.get('window');
export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term: "",
            restaurants:[],
        }
    }


    render() {

        return (
            <View style={styles.container}>

                    <View style={styles.searchContainer}>
                        <Text style={ styles.searchLabel}>
                            Search:
                        </Text>
                        <TextInput placeholder={"Search your favourite restaurant"}
                                  // placeholderTextColor={Colors.placeholderColor}
                                   style={styles.searchInput}
                                   onChangeText={this.searchRestaurant.bind(this)}/>
                        <FlatList data={this.state.restaurants}
                                  style={{flex: 1}}
                                  keyExtractor={(data) => data.id + ""}
                                  renderItem={this.renderRestaurants.bind(this)}/>
                    </View>

            </View>
        );
    }
renderRestaurants({item}){
    return (
        <TouchableOpacity onPress = {() => this.props.navigation.navigate('RestaurantDetails',{ item : item })}>
            <View style={styles.userContainer}>
                <Image style={styles.profilePicture} source={{uri: item.thumbnail}}/>
                <View style={styles.userInfoContainer} >
                    <Text  style={styles.name}>{item.name}</Text>
                    <Text style={styles.city}>{item.city}</Text>
                    <View style = {styles.cuisineView}><Text style={styles.cuisine}>{item.cuisines}</Text></View>
                </View>
            </View>
        </TouchableOpacity>

    );
}

searchRestaurant(text){
    filterRestaurant(text)
        .then((restaurants)=>{
            console.log("Restaurants: " +JSON.stringify(restaurants));
            this.setState({
                restaurants:restaurants
            });
        })
    }
}
const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        alignItems: 'stretch',
       // paddingHorizontal: responsiveWidth(6)
    },
    searchLabel: {
        margin: 18,
        paddingTop: responsiveHeight(7),
        color: "#888",
        fontSize: responsiveFontSize(4),
        fontWeight: "600",
        marginBottom: responsiveHeight(1),

    },
    searchInput: {
        margin: 15,
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(4),
        fontSize: responsiveFontSize(2.2),
        borderRadius: responsiveWidth(2),

        color: "#666",
    },
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