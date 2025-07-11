import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { View,Text,Image, TouchableOpacity, FlatList } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";


interface CardsData{
  ImageTenis:string,
  TitlesTenis:string,
  Precio: number,
  Estrellas:Float,
  Id:number,
};

export default function CardProducto({ImageTenis,TitlesTenis,Precio,Estrellas,Id}:CardsData) {

  const [IconHeart,setIconHeart] = useState(false);


  const BtnIconheart = () =>{
    setIconHeart(!IconHeart);
  };

  const Iconheart = () =>{
    switch(IconHeart){
      case true:
        return <Image style={{height:30,width:30,objectFit:'contain'}} 
                source={require('../../../assets/assetsHome/icon/Heart_corazón.png')}/>
      case false:
        return <Image style={{height:30,width:30,objectFit:'contain'}} 
                source={require('../../../assets/assetsHome/icon/heart.png')}/>
                
    };
  };

 



  return (
      <TouchableOpacity onPress={()=>router.navigate({pathname:'Detalles/ScreenDetalles',params:{Id}})} 
              style={{width:160,borderWidth:1,borderRadius:10,padding:10,borderColor:'#dee2e6',boxShadow:'0px 0px 10px 1px #f8f9fa',backgroundColor:'#f8f9fa'}}>
            <View style={{width:'100%',alignItems:'flex-end'}}>
                <TouchableOpacity onPress={BtnIconheart}>
                  <Iconheart/>
                </TouchableOpacity>
            </View>
            <View>
              <Image style={{width:'100%',height:150,objectFit:'contain'}} source={{uri:ImageTenis}}/>
            </View>
            <View>
                <Text style={{fontSize:16,fontWeight:'500'}}>{TitlesTenis}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{fontWeight:'500',fontSize:18}}>{Precio.toLocaleString()}$</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image style={{height:20,width:20,objectFit:'contain',tintColor:'#ffc300'}} 
                  source={require('../../../assets/assetsHome/icon/Star.png')}/>
                <Text style={{fontWeight:'600'}}>{Estrellas}</Text>
              </View>
            </View>
      </TouchableOpacity>

  )
}
