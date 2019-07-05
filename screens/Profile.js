import React, { Component } from 'react';

import {View, Text, StyleSheet,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import Header from "../components/Profile/Header";
import {MaterialIcons} from "@expo/vector-icons";

// import styles from './styles';

export default class Profile  extends Component {
    render() {
        return (
            <SafeAreaView><Header navigation={this.props.navigation}/>
            <View style={{flexDirection:'row',justifyContent: 'space-between',alignItems: 'center',paddingTop:20,}}>
                <View>
                    <Text style={{paddingLeft:10,fontSize:20,fontWeight:'bold'}}>Vrushali Shah</Text>
                   <View style={{flexDirection:'row',justifyContent: 'flex-start',alignItems: 'center',paddingTop:5,paddingLeft:10,}}>
                       <MaterialIcons name={"location-on"} size={15} style={{color:"#999"}}/>

                       <Text style={{fontSize:14,fontWeight:'bold',color:"#999"}}>Mumbai</Text>




                   </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:14,fontWeight:'bold',color:"#999",paddingLeft:10,paddingTop:10,}}>31 Followers</Text>
                        <View style={{backgroundColor: "#F9E6D3",width:80,padding:8,borderRadius:10,marginLeft:10,marginTop:10}}>
                            <Text style={{color:"#F0A202",alignSelf:'center'}}>Foodie</Text>
                        </View>
                    </View>
                </View>
                    <Image source={require("../assets/user.jpg")} style={{width:130,height:130,borderRadius:65,marginRight:20,borderWidth:0.5,borderColor:'#dddddd'}} />

            </View>
                <View style={{alignItems:'center'}}><TouchableOpacity>
                    <Text style={{borderWidth: 1,borderColor: "#b63838",borderRadius: 20,color: "#b63838",padding:12,backgroundColor: "#fff",fontSize:18,fontWeight: '600',marginTop:30,paddingLeft:70,paddingRight:70}}>Logout</Text>
                </TouchableOpacity></View>

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
});