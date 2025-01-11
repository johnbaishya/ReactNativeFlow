import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";
import RegisterScreen from "../Screens/AuthScreens/RegisterScreen";
import SplashScreen from "../Screens/AuthScreens/SplashScreen";
import React from "react";

const Stack = createNativeStackNavigator();

const UnauthenticatedStack = ()=>{
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="RegisterScreen"component={RegisterScreen}/>
            </Stack.Navigator>
        </>
    )
}

export default UnauthenticatedStack;