import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SplashScreen from "../Screens/AuthScreens/SplashScreen";

const Stack = createNativeStackNavigator();

const SplashScreenStack = ()=>{
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            </Stack.Navigator>
        </>
    )
}

export default SplashScreenStack;