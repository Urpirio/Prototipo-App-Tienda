import { router, useFocusEffect } from "expo-router";
import { View,Text, TouchableOpacity,Image,ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useStyleDetails } from "../../components/components - Details/hooks/useStyleDetails";
import { useCallback, useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Skeleton } from '@rneui/themed';
import TopBardetails from "../../components/components - Details/components/TopBardetails";
import SkeletonDetails from "../../components/components - Details/components/SkeletonDetails";

export default function ScreenDetalles() {

  const {setSize,Size} = useStyleDetails();
  const { Save,setSave,ImageSave } = useStyleDetails();
  const LocalData:any = useLocalSearchParams();
  const [DataDetalles,setDataDetalles] = useState<any>();
  const [ImagenPrincipal,setImagenPrincipal] = useState<any>();

  useFocusEffect(useCallback(()=>{
    fetch('https://randomapi.com/api/a3b82ac32f5131c655aa1cd2358a87a6')
    .then(respuesta => respuesta.json())
    .then((Data)=>{
        const CardDetails = Data.results[0].Tienda.filter((Data:{Id:number}) => Data?.Id == LocalData.Id)
        setDataDetalles(CardDetails);
    })
    .catch(()=>{

    })
    .finally(()=>{
        
    })

  },[]))
  

  if(!DataDetalles){
    return(
        <SkeletonDetails 
        setSave={setSave} 
        Save={Save} 
        ImageSave={ImageSave}/>
    )
  };


  return (
    <SafeAreaProvider style={{backgroundColor:'white',paddingHorizontal:10}}>
        <TopBardetails setSave={setSave} Save={Save} ImageSave={ImageSave}/>
        
        <View style={{width:'100%',height:220,paddingVertical:10}}>
            <View style={{height:200,width:'100%',borderRadius:10,borderWidth:1,borderColor:'#dee2e6'}} >
                <Image 
                style={{height:'100%',width:'100%',objectFit:'contain'}} 
                source={{uri:ImagenPrincipal ? ImagenPrincipal : DataDetalles[0]?.ImgPrincipal}}/>
            </View>
        </View>

        <ScrollView>
            <View style={{flexDirection:'row',gap:10}}>
                {DataDetalles[0]?.MoreImage?.map((Data:{img:string})=>{
                return(
                <TouchableOpacity onPress={()=>{
                    setImagenPrincipal(Data?.img)
                }} style={{borderWidth:1,padding:10,borderRadius:10,borderColor:'#dee2e6',backgroundColor:`${Data?.img === ImagenPrincipal ? '#dee2e6' : 'white'}`}}>
                    <Image 
                    style={{height:30,width:30,objectFit:'contain'}} 
                    source={{uri:Data?.img}}/>
                </TouchableOpacity>
                )
                })}
            </View>
        </ScrollView>
        <View>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:10}}>
                <Text style={{fontSize:24,fontWeight:'500'}}>Size</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image style={{tintColor:'#ffc300',height:20,width:20}} source={require('../../assets/assetsDetalles/icon/Star.png')}/>
                    <Text style={{fontSize:20,fontWeight:'500'}}>{DataDetalles[0]?.Estrellas}</Text>
                </View>
            </View>

            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',height:50}}>
                {DataDetalles[0]?.SizeDisponibles.map((D:any)=>{
                    return(
                        <TouchableOpacity 
                            onPress={()=>setSize(D)} 
                            style={{
                                borderWidth:1,
                                paddingVertical:5,
                                borderRadius:10,
                                borderColor:'#dee2e6',
                                paddingHorizontal:10,
                                height:'100%',
                                width:'16%',
                                justifyContent:'center',
                                alignItems:'center',
                                backgroundColor:`${Size === D ? '#dee2e6' : 'white'}`
                            }}>
                            <Text style={{fontSize:20,fontWeight:'400',color:'gray'}}>{D}</Text>
                        </TouchableOpacity>
                    )
                })} 
            </View>

        </View>
        <View style={{justifyContent:'space-between',flexDirection:'row',paddingVertical:10}}>
            <Text style={{fontSize:24,fontWeight:'600'}}>Nike Lebron</Text>
            <Text style={{fontSize:24,fontWeight:'600'}}>130$</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style={{width:'48%',paddingVertical:10,borderWidth:0,alignItems:'center',borderRadius:10,backgroundColor:'#00b4d8'}}>
                <Text style={{fontSize:16,color:'white',fontWeight:'500'}}>Description</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'48%',paddingVertical:10,borderWidth:0,alignItems:'center',borderRadius:10,backgroundColor:'#dee2e6'}}>
                <Text style={{fontSize:16,fontWeight:'500',color:'gray'}}>Reviews</Text>
            </TouchableOpacity>
        </View>
        <View style={{paddingVertical:10,width:'100%'}}>
            <Text style={{fontSize:16,color:'gray',width:'100%'}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Libero quisquam mollitia accusantium tenetur laboriosam,
                blanditiis fugit delectus quam eligendi quidem vitae ex,
                ipsam assumenda hic eos praesentium dolores cupiditate in!
            </Text>
        </View>
        
    </SafeAreaProvider>
  )
};
