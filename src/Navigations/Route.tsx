import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import AuthenticatedStack from "./AuthenticatedStack";
import UnauthenticatedStack from "./UnauthenticatedStack";
import AppModals from "../Components/Modals/AppModals";

const Route = ()=>{
    const {authenticated} = useSelector((state:RootState)=>state.app);
    return(
        <>
            <AppModals/>
            <NavigationContainer>
                {
                authenticated ? <AuthenticatedStack/> : <UnauthenticatedStack/>
                }
            </NavigationContainer>
        </>
    );
};

export default Route;
