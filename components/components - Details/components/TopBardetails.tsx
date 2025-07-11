import { View,TouchableOpacity,Image,Text } from "react-native";
import { router } from "expo-router";


interface D{
    ImageSave:any,
    setSave:any,
    Save:any,
};

export default function TopBardetails({ImageSave,setSave,Save}:D) {
  return (
    <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingVertical:5
        }}>
            <TouchableOpacity onPress={()=>router.back()} style={{
                borderWidth:1,
                borderColor:'#dee2e6',
                padding:5,
                borderRadius:10,
                boxShadow:'0px 0px 10px 0px #f8f9fa'
            }}>
                <Image 
                style={{height:40,width:40,objectFit:'contain',tintColor:'black',}} 
                source={require('../../../assets/assetsDetalles/icon/IconBack.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize:24,fontWeight:'500'}}>Details</Text>
            <TouchableOpacity 
                onPress={()=>setSave(!Save)}
                style={{
                borderWidth:1,
                borderColor:'#dee2e6',padding:5,borderRadius:10}}>
                <ImageSave/>
            </TouchableOpacity>
    </View>
  )
}
