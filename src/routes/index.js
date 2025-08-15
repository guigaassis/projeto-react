import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/index.js";
import Detalhes from "../screens/Details/index.js";


export default function Routes (){

    const stack = createNativeStackNavigator();
    
    return(

        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen name ="Home" component = {Home} ></stack.Screen>
            <stack.Screen name ="Detalhes" component = {Detalhes} ></stack.Screen>
            </stack.Navigator>



        </NavigationContainer>
    )
}