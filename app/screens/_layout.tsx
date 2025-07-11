import { Tabs } from "expo-router";
import { Image, TouchableOpacity, View,Text } from "react-native";
import { router,useRouter } from "expo-router";


export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="ScreenHome" options={{
            title: '',
            tabBarIcon:({color})=>{
                return <Image 
                        style={{height:35,width:35,tintColor: color}} 
                        source={require('../../assets/assetsHome/icon/home.png')}/>
            },
            header:()=>{
                return <View style={{height:30,width:'100%',backgroundColor:'white'}}/>
            }
        }}/>
        <Tabs.Screen name="ScreenStore" options={{
            title:'',
            tabBarIcon:({color})=>{
                return <Image 
                        style={{height:35,width:35,tintColor:color}} 
                        source={require('../../assets/assetsStore/icon/store-alt-2.png')}/>
            }
        }}/>
        <Tabs.Screen name="ScreenNotificacion" options={{
            title:'',
            tabBarIcon:({color})=>{
                return <Image 
                        style={{height:35,width:35,tintColor:color}} 
                        source={require('../../assets/assetsNotificacion/Icon/bell.png')}/>
            }
        }}/>
        <Tabs.Screen name="ScreenPerfil" options={{
            title:'',
            tabBarIcon:({color})=>{
                return <Image 
                        style={{height:35,width:35,tintColor:color}} 
                        source={require('../../assets/assetsPerfil/icon/user-circle.png')}/>
            }
        }} />
    </Tabs>
  )
}
