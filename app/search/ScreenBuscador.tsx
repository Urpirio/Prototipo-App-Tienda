import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,TextInput,TouchableOpacity, Image } from "react-native";

export default function ScreenBuscador() {
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>

        <View style={{paddingHorizontal:10,paddingVertical:5,justifyContent:'center'}}>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            borderWidth:1,
            borderColor:'#dee2e6',
            borderRadius:10,
            paddingHorizontal:5,
            width:'100%',
            height:55,
            boxShadow:'0px 0px 10px 1px #f8f9fa',
            backgroundColor:'white'
          }}>
            <TextInput placeholderTextColor={'gray'} style={{width:'90%',fontSize:18,height:'100%'}} placeholder="Search"/>
            <TouchableOpacity style={{height:'100%',justifyContent:'center'}}>
              <Image style={{height:35,width:35}} 
              source={require('../../assets/assetsHome/icon/search (1).png')}/>
            </TouchableOpacity>
          </View>
          
        </View>
    </SafeAreaProvider>
  )
}
