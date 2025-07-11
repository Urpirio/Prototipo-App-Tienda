import { View,Text, TouchableOpacity,Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenDetalles() {
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            paddingHorizontal:10,
            paddingVertical:5
        }}>
            <TouchableOpacity style={{borderWidth:1,borderColor:'#dee2e6',padding:5,borderRadius:10}}>
                <Image 
                style={{height:40,width:40,objectFit:'contain',tintColor:'black'}} 
                source={require('../../assets/assetsDetalles/icon/IconBack.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize:24,fontWeight:'500'}}>Details</Text>
            <TouchableOpacity style={{borderWidth:1,borderColor:'#dee2e6',padding:5,borderRadius:10}}>
                <Image 
                style={{height:40,width:40,objectFit:'contain',tintColor:'black'}} 
                source={require('../../assets/assetsDetalles/icon/heart.png')}/>
            </TouchableOpacity>
        </View>
        <View>
            <View>
                <Image/>
            </View>
        </View>
        <View>
            <TouchableOpacity>
                <Image/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image/>
            </TouchableOpacity>
        </View>
        <View>
            <View>
                <Text></Text>
                <View>
                    <Image/>
                    <Text></Text>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Image/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image/>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text></Text>
            <Text></Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Description</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Reviews</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Libero quisquam mollitia accusantium tenetur laboriosam,
                blanditiis fugit delectus quam eligendi quidem vitae ex,
                ipsam assumenda hic eos praesentium dolores cupiditate in!
            </Text>
        </View>
        
    </SafeAreaProvider>
  )
};
