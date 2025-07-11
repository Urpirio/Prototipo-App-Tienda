import { Tabs } from "expo-router";
import { View,TouchableOpacity,Image,Text } from "react-native";



export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="ScreenDetalles" options={{
            header:()=>{
                return <View/>
            },
            tabBarButton:()=>{
                return(
                    <View style={{
                        width:'100%',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        paddingVertical:5,
                        paddingHorizontal:10,
                    }}>
                        <TouchableOpacity style={{
                            borderWidth:1,
                            backgroundColor:'#ced4da',
                            width:'20%',
                            height:'100%',
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:10,
                            borderColor:'#dee2e6',
                            paddingVertical:10
                        }}>
                         <Image
                         style={{height:30,width:30,objectFit:'contain',tintColor:'black'}} 
                         source={require('../../assets/assetsDetalles/icon/cart-plus.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderWidth:1,
                            backgroundColor:'black',
                            justifyContent:'center',
                            width:'70%',
                            height:'100%',
                            alignItems:'center',
                            borderRadius:10
                        }}>
                            <Text style={{color:'white'}}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                )
            },
            
        }}/>
    </Tabs>
  )
}
