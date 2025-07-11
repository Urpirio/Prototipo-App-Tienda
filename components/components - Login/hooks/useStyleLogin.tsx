import { Image } from "react-native";
import { useState } from "react";

export const useStyleLogin = () =>{

    const [IconPassword,setIconPassword] = useState<boolean>(true);
    const [checBoxValue,setcheckBoxValue] = useState<boolean>(false);

     const IconPass = () =>{
        if (IconPassword) return <Image 
                          style={{height:40,width:40}} 
                          source={require('../../../assets/assetsLogin/icon/eyeslash.png')}/>
        
        return <Image 
        style={{height:40,width:40}} 
        source={require('../../../assets/assetsLogin/icon/eye.png')}/>  
             
     };

     return({
        IconPass,
        IconPassword,
        checBoxValue,
        setIconPassword,
        setcheckBoxValue,
     })
}