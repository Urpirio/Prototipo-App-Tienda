import { StyleSheet } from "react-native";

export const StyleFiltroCategoria = StyleSheet.create({
    Filtro: {
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between',
        paddingVertical:10
    },
    BtnFiltroActivo:{
        borderWidth:1,
        padding:5,
        borderRadius:5,
        backgroundColor:'#0077b6',
        borderColor:'#0077b6',
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },
    BtnFiltroNoActivo:{
        borderWidth:1,
        padding:5,
        borderRadius:5,
        borderColor:'#dee2e6'
    },
    Icontenis:{
        height:30,
        width:30,
        objectFit:'contain'
    }

})