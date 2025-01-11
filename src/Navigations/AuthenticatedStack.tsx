import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreens/HomeScreen";
import React from "react";

const Stack = createNativeStackNavigator();

const AuthenticatedStack = ()=>{
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            </Stack.Navigator>
        </>
    )
}

export default AuthenticatedStack;