import { NavigationContainer } from "@react-navigation/native"
import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import AuthenticatedStack from "./AuthenticatedStack";
import UnauthenticatedStack from "./UnauthenticatedStack";
import AppModals from "../Components/Modals/AppModals";
import SplashScreen from "../Screens/AuthScreens/SplashScreen";
import { intializeAuth } from "../Config/authConfig";
import { PaperProvider, useTheme } from "react-native-paper";
import { StatusBar } from "react-native";
import { customDarkTheme, customLightTheme } from "../Theme/theme";
import { COLORS } from "../Constants/themeConstants";

const Route = ()=>{
    const {authenticated,showSplashScreen} = useSelector((state:RootState)=>state.app);
    const {darkTheme} = useSelector((state:RootState)=>state.app);
    useEffect(()=>{
        intializeAuth();
    },[]);
    return(
        <>
            <PaperProvider theme={darkTheme ? customDarkTheme : customLightTheme}>
                <StatusBar
                barStyle={darkTheme ? 'light-content' : 'dark-content'}
                backgroundColor={COLORS.primary}
                />
                <AppModals/>
                <NavigationContainer>
                    <>
                    {
                        showSplashScreen ?
                        <SplashScreen/> :
                        authenticated ? <AuthenticatedStack/> : <UnauthenticatedStack/>
                    }
                    </>
                </NavigationContainer>
            </PaperProvider>
        </>
    );
};

export default Route;
