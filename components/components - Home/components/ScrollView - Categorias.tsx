import { ScrollView,View,Text,TouchableOpacity,Image } from "react-native"

export default function ScrollViewCategorias() {
  return (
        <ScrollView style={{flexDirection:'row',paddingVertical:5,paddingHorizontal:5}}>
          <View style={{borderWidth:1,boxShadow:'0px 0px 10px 0px #f8f9fa',flexDirection:'row',width:'75%',height:200,borderRadius:20,padding:20,borderColor:'#ced4da',backgroundColor:'#000814',alignItems:'center',justifyContent:'space-between'}}>
            <View style={{height:'100%',width:'70%',justifyContent:'center',gap:20}}>
              <Text style={{color:'white',fontSize:20,fontWeight:'500'}}>Flat 50% discount on your first order.</Text>
              <TouchableOpacity style={{borderWidth:1,borderRadius:30,backgroundColor:'#fb8500',justifyContent:'center',alignItems:'center',paddingVertical:5,maxWidth:100}}>
                <Text style={{color:'white'}}>Buy Now</Text>
              </TouchableOpacity>
            </View>
            <Image style={{height:100,width:100,objectFit:'contain'}} 
                source={require('../../../assets/assetsHome/img/Tenis.png')}/>
          </View>
        </ScrollView>
  )
};
