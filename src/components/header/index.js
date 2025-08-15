import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import  {Feather} from '@expo/vector-icons'
import styles from './style'

export default function Header(){
    return(
        <View style = {styles.viewHeader}>
            <TouchableOpacity>
                <Feather style={{marginLeft:-70}} nome = 'menu' size= {36} color= '#fff' />
            </TouchableOpacity>

            <Text style={styles.textHeader}> JUVENIL FILMS</Text>
        </View>
    )
}