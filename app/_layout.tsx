import {Stack} from 'expo-router';
import { View,Text } from 'react-native';


export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{
            header:()=>{
                return <View/>
            }
        }}/>
        <Stack.Screen name='screens' options={{
            header:()=>{
                return <View/>
            }
        }}/>
        <Stack.Screen name='search/ScreenBuscador' options={{
            header:()=>{
                return <View style={{height:30,width:'100%',backgroundColor:'white'}}/>
            }
        }}/>
        <Stack.Screen name='Detalles' options={{
            header:()=>{
                return <View style={{height:30,width:'100%',backgroundColor:'white'}}/>
            }
        }}/>
    </Stack>
  )
}
