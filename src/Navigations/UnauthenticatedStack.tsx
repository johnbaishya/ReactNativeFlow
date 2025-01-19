import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";
import RegisterScreen from "../Screens/AuthScreens/RegisterScreen";
import React from "react";

const Stack = createNativeStackNavigator();

const UnauthenticatedStack = ()=>{
    return(
        <>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="RegisterScreen"component={RegisterScreen}/>
            </Stack.Navigator>
        </>
    )
}

export default UnauthenticatedStack;