import { useState } from "react"
import { Image } from "react-native";

interface Nsize{
    size:string,
};


export const useStyleDetails = () => {
    const [Size,setSize] = useState<string>('');
    const [Save,setSave] = useState<boolean>(false);


    const ImageSave = () =>{
        if(!Save) return <Image 
                        style={{height:40,width:40,objectFit:'contain',tintColor:'black'}} 
                        source={require('../../../assets/assetsDetalles/icon/heart.png')}/>
        return <Image 
                style={{height:40,width:40,objectFit:'contain'}} 
                source={require('../../../assets/assetsDetalles/icon/Heart_corazón.png')}/>
    };

    return({
        setSize,
        Size,
        Save,
        setSave,
        ImageSave
    })
};