import { StyleSheet } from "react-native";

const stylest = StyleSheet.create({
    containerFilmes:{
        paddingTop:20,
        paddingBottom:16,
        paddingRight:16,
        width:140,
        height:280, 
              
    },
    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8
    },
    textoNota:{
        fontSize:10,
        color:'#fff',
        paddingLeft:4,
        
    },
    sin:{
        color: 'white',
        marginLeft: 10
    },
    tit:{
         color: 'white',

    },
    images:{
        width:'90%',
        height:540,
        borderRadius:8,
    },
    body: {
    flex:1,
    backgroundColor: '#410287',
    alignItems:"center",
    
    },
    myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    marginLeft:-2
  },
  myEmptyStarStyle: {
    color: 'white',
  }
  
})

export default stylest