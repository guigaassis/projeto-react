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
        fontSize:20,
        paddingTop:8
    },
    notast:{
        fontSize:14,
        color:'white',
        paddingLeft:4,
        
    },
    sin:{
        color: 'white',
        marginLeft: 10
    },
    tit:{
         color: 'white',
         fontSize:20,

    },
    images:{
        width:'79%',
        height:540,
        borderRadius:8,
        borderWidth: 1,
        borderColor: '#00A8FF'
    },
    body: {
    flex:1,
    backgroundColor: '#003',
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