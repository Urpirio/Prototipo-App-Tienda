import { TouchableOpacity,View } from "react-native"
import { Skeleton } from "@rneui/base"

export default function CardSkeletonProducto() {
  return (
    <TouchableOpacity style={{
        width:160,
        height:200,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#dee2e6',
        boxShadow:'0px 0px 10px 1px #e9ecef',
        backgroundColor:'#f8f9fa'
        }}>
        <Skeleton 
            height={'100%'} width={'100%'} 
            style={{borderRadius:10}} 
            skeletonStyle={{backgroundColor:'#e9ecef',borderRadius:10}}/>
    </TouchableOpacity>
  )
}
