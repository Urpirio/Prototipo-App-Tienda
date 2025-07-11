import { Tabs } from "expo-router";
import { Image, TouchableOpacity, View,Text } from "react-native";
import { router,useRouter } from "expo-router";


export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="ScreenHome" options={{
            title: 'Home',
            tabBarIcon:({color})=>{
                return <Image 
                        style={{height:30,width:30,tintColor: color}} 
                        source={require('../../assets/assetsHome/icon/home.png')}/>
            },
            header:()=>{
                return <View style={{height:30,width:'100%',backgroundColor:'white'}}/>
            }
        }}/>
        <Tabs.Screen name="ScreenStore" options={{
            title:'Tienda',
            tabBarIcon:({color})=>{
                return <Image 
                        style={{height:30,width:30,tintColor:color}} 
                        source={require('../../assets/assetsStore/icon/store-alt-2.png')}/>
            }
        }}/>
        <Tabs.Screen name="ScreenNotificacion" options={{
            title:'Notificacion',
            tabBarIcon:({color})=>{
                return <Image 
                        style={{height:30,width:30,tintColor:color}} 
                        source={require('../../assets/assetsNotificacion/Icon/bell.png')}/>
            }
        }}/>
        <Tabs.Screen name="ScreenPerfil" options={{
            title:'Perfil',
            tabBarIcon:({color})=>{
                return <Image 
                        style={{height:30,width:30,tintColor:color}} 
                        source={require('../../assets/assetsPerfil/icon/user-circle.png')}/>
            }
        }} />
    </Tabs>
  )
}
