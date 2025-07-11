import { SafeAreaProvider } from "react-native-safe-area-context";
import { View,Text,TouchableOpacity,ScrollView } from "react-native";
import FiltroCategories from "./FiltroCategories";
import Search_And_Menu from "./Search";
import ScrollViewCategorias from "./ScrollView - Categorias";
import CardSkeletonProducto from "./CardSkeletonProducto";


export default function SkeletonHome() {
  return (
<SafeAreaProvider>
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
      <ScrollView >
        <View style={{
          width:'100%',
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:'space-around',
          gap:20}}>
            <CardSkeletonProducto/>
            <CardSkeletonProducto/>
            <CardSkeletonProducto/>
            <CardSkeletonProducto/>
            <CardSkeletonProducto/>
            <CardSkeletonProducto/>

        </View>

      </ScrollView>
    </SafeAreaProvider>
  )
}
