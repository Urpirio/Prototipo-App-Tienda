import { Image,View,Text,TouchableOpacity } from "react-native";
import { StyleFiltroCategoria } from "../style/StyleFiltroCategoria";
import { useState } from "react";

interface Status{
    state: string,
};

interface  StatusStyle{
    state: boolean,
    Filtro: string
};

export default function FiltroCategories() {

    const [StatusFiltro,setStatusFiltro] = useState<String>('Rojos');

    const Textfiltro = ({state}:Status) =>{
       const P = StatusFiltro == state;
       switch(P){
        case true:
           return <Text style={{color:'white',fontWeight:'500'}}>Shoes</Text>
        case false:
            return 
       }
    };


  return (
    <View style={StyleFiltroCategoria.Filtro}>
          <TouchableOpacity  
            onPress={()=>setStatusFiltro('Rojos')}
            style={StatusFiltro === 'Rojos' ? StyleFiltroCategoria.BtnFiltroActivo : StyleFiltroCategoria.BtnFiltroNoActivo}>
            <Image style={StyleFiltroCategoria.Icontenis} 
              source={require('../../../assets/assetsHome/img/Tenis2.png')}/>
              <Textfiltro state="Rojos"/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>setStatusFiltro('Azules')}
            style={StatusFiltro === 'Azules' ? StyleFiltroCategoria.BtnFiltroActivo : StyleFiltroCategoria.BtnFiltroNoActivo}>
            <Image style={StyleFiltroCategoria.Icontenis} 
              source={require('../../../assets/assetsHome/img/Tenis3.png')}/>
              <Textfiltro state="Azules"/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>setStatusFiltro('Naranjas')}
            style={StatusFiltro === 'Naranjas' ? StyleFiltroCategoria.BtnFiltroActivo : StyleFiltroCategoria.BtnFiltroNoActivo}>
            <Image style={StyleFiltroCategoria.Icontenis} 
             source={require('../../../assets/assetsHome/img/Tenis4.png')}/>
             <Textfiltro state="Naranjas"/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>setStatusFiltro('Morados')}
            style={StatusFiltro === 'Morados' ? StyleFiltroCategoria.BtnFiltroActivo : StyleFiltroCategoria.BtnFiltroNoActivo}>
            <Image style={StyleFiltroCategoria.Icontenis} 
             source={require('../../../assets/assetsHome/img/Tenis5.png')}/>
             <Textfiltro state="Morados"/>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>setStatusFiltro('Amarillos')}
            style={StatusFiltro === 'Amarillos' ? StyleFiltroCategoria.BtnFiltroActivo : StyleFiltroCategoria.BtnFiltroNoActivo}>
            <Image style={StyleFiltroCategoria.Icontenis} 
             source={require('../../../assets/assetsHome/img/Tenis6.png')}/>
             <Textfiltro state="Amarillos"/>
          </TouchableOpacity>
          <TouchableOpacity
             onPress={()=>setStatusFiltro('Negros')} 
            style={StatusFiltro === 'Negros' ? StyleFiltroCategoria.BtnFiltroActivo : StyleFiltroCategoria.BtnFiltroNoActivo}>
            <Image style={StyleFiltroCategoria.Icontenis} 
             source={require('../../../assets/assetsHome/img/Tenis6.png')}/>
             <Textfiltro state="Negros"/>
          </TouchableOpacity>
    </View>
  )
}
