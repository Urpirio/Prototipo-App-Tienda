import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { Skeleton } from "@rneui/base";
import TopBardetails from "./TopBardetails";


export default function SkeletonDetails(States:{setSave:any,Save:any,ImageSave:any}) {
  return (
<SafeAreaProvider style={{backgroundColor:'white',paddingHorizontal:10}}>
        <TopBardetails setSave={States.setSave} Save={States.Save} ImageSave={States.ImageSave}/>
        <View style={{paddingVertical:10}}>
            <Skeleton height={200} width={'100%'} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
        </View>
        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
        </View>
        <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingVertical:10}}>
                <Skeleton height={30} width={50} style={{borderRadius:10}} 
                    skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Skeleton height={30} width={50} style={{borderRadius:10}} 
                        skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
                </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={50} width={50} style={{borderRadius:10}} 
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
        </View>
        <View style={{justifyContent:'space-between',flexDirection:'row',paddingVertical:10}}>
            <Skeleton height={40} width={'100%'} style={{borderRadius:10}}
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
        </View>
        <View style={{justifyContent:'space-between',flexDirection:'row',paddingVertical:10}}>
            <Skeleton height={40} width={'45%'} style={{borderRadius:10}}
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
            <Skeleton height={40} width={'45%'} style={{borderRadius:10}}
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
        </View>
        <View style={{justifyContent:'space-between',flexDirection:'row',paddingVertical:10,height:100}}>
            <Skeleton height={'100%'} width={'100%'} style={{borderRadius:10}}
                skeletonStyle={{borderRadius:10,backgroundColor:'#e9ecef'}}/>
        </View>
    </SafeAreaProvider>
  )
}
