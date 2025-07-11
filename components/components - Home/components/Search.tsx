import { router } from "expo-router";
import { View,TouchableOpacity,Image,Text } from "react-native";

export default function Search_And_Menu() {
  return (
    <View style={{flexDirection:'row',alignItems:'center',height:50,justifyContent:'space-between',backgroundColor:'white',paddingHorizontal:10}}>
            <TouchableOpacity style={{borderWidth:1,padding:5,borderRadius:5,borderColor:'#dee2e6'}}>
              <Image style={{height:35,width:35}} source={require('../../../assets/assetsHome/icon/menu.png')}/>
            </TouchableOpacity>

              <Text style={{fontSize:20,fontWeight:'500'}}>Explore</Text>

            <TouchableOpacity onPress={()=>{
                router.navigate({pathname:'search/ScreenBuscador'})
            }} style={{borderWidth:1,padding:5,borderRadius:5,borderColor:'#dee2e6'}}>
              <Image style={{height:35,width:35}} source={require('../../../assets/assetsHome/icon/search (1).png')}/>
            </TouchableOpacity>
    </View>
  )
}
