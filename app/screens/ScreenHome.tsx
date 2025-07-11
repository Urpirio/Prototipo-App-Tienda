import { Text, TouchableOpacity, View, StatusBar, FlatList} from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import FiltroCategories from "../../components/components - Home/components/FiltroCategories"
import ScrollViewCategorias from "../../components/components - Home/components/ScrollView - Categorias";
import { RefreshControl } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import CardProducto from "../../components/components - Home/components/CardProducto";
import Search_And_Menu from "../../components/components - Home/components/Search";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import SkeletonHome from "../../components/components - Home/components/SkeletonHome";

export default function index() {
  const [Refresh,setRefresh] = useState(false);
  const [DataCards,setDataCards] = useState();

  const FRefresh = () =>{
    setRefresh(true);
    setTimeout(()=>{
      setRefresh(false);
    },1000)
  };

   useFocusEffect(useCallback(()=>{
      fetch('https://randomapi.com/api/a3b82ac32f5131c655aa1cd2358a87a6')
      .then(respuesta => respuesta.json())
      .then((Data)=>{
        setDataCards(Data.results);
      })
      .catch((error)=>{
        console.log(error)
      })
      .finally(()=>{
  
      })
    },[Refresh]));

  
  if(!DataCards){
    return <SkeletonHome/>
  }

  return (
    <SafeAreaProvider style={{backgroundColor:'white',paddingBottom:5}}>
      <FlatList 
      refreshControl={<RefreshControl refreshing={Refresh}  onRefresh={()=>FRefresh()}/>}
      ListEmptyComponent={<View style={{width:'100%',alignItems:'center'}}>
        
      </View>}
      data={DataCards}
      ListHeaderComponent={
        <View>
          <Search_And_Menu/>

        <View style={{height:210}}>
          <ScrollViewCategorias/>
        </View>

        <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',paddingHorizontal:10}}>
          <Text style={{color:'#000814',fontSize:24,fontWeight:'700'}}>Categories</Text>
          <TouchableOpacity>
            <Text style={{color:'gray'}}>View all</Text>
          </TouchableOpacity>
        </View>

        <FiltroCategories/>
        </View>
      }
      
      renderItem={({item})=>{
       
        const Cards = item.Tienda.map((Data:{ImgPrincipal:string,Tenis:string,Precio:number,Estrellas:Float,Id:number}) =>{
          return  <CardProducto 
                  ImageTenis={Data?.ImgPrincipal} 
                  TitlesTenis={Data?.Tenis} 
                  Precio={Data?.Precio}
                  Estrellas={Data?.Estrellas}
                  Id={Data?.Id}
                  />
        });

        return <View
          style={{
          width:'100%',
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:'space-around',
          paddingHorizontal:10,
          gap:20}}>{Cards}</View>
      }}/>

      <StatusBar barStyle={'dark-content'}/>

    </SafeAreaProvider>
  )
}
