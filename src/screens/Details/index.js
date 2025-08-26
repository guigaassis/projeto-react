import {View,Text, Image} from "react-native";
import { useRoute } from "@react-navigation/native";
import stylest from "./styles.js";
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Detalhes(){
    const route = useRoute();
    return(
        <View style = {stylest.body}>
            <Text style = {stylest.tit}>{route.params.titulo}</Text>
            <Image style={stylest.images} source={{uri : route.params.img}}/>
            <Text style = {stylest.notast}>{route.params.nota}</Text>
            <Stars
            default={route.params.nota}
            count={5}
            half={true}
            starSize={100} 
            fullStar={<Icon name={'star'} style={[stylest.myStarStyle]}/>}
            emptyStar={<Icon name={'star-outline'} style={[stylest.myStarStyle, stylest.myEmptyStarStyle]}/>}
            halfStar={<Icon name={'star-half'} style={[stylest.myStarStyle]}/>}
            disable = {true}
  />
            <Text style = {stylest.sin}>SINOPSE: {route.params.sinopse}</Text>
         
            
        </View>
    


    )
}





