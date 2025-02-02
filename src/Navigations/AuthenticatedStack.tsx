import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomNavigation from "./BottomNavigation";

const Stack = createNativeStackNavigator();

const AuthenticatedStack = ()=>{
    return(
        <> 
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="BottomNavigation" component={BottomNavigation}/>
            </Stack.Navigator>
        </>
    )
}

export default AuthenticatedStack;