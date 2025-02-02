import { NavigationContainer } from "@react-navigation/native"
import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import AuthenticatedStack from "./AuthenticatedStack";
import UnauthenticatedStack from "./UnauthenticatedStack";
import AppModals from "../Components/Modals/AppModals";
import SplashScreen from "../Screens/AuthScreens/SplashScreen";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";
import { customDarkTheme, customLightTheme } from "../Theme/theme";
import { COLORS } from "../Constants/themeConstants";
import appConfig from "../Config/appConfig";

const Route = ()=>{
    const {authenticated,showSplashScreen} = useSelector((state:RootState)=>state.app);
    const {darkTheme} = useSelector((state:RootState)=>state.app);
    useEffect(()=>{
        appConfig();
    },[]);
    return(
        <>
            <PaperProvider theme={darkTheme ? customDarkTheme : customLightTheme}>
            <AppModals/>
                <StatusBar
                barStyle={darkTheme ? 'light-content' : 'dark-content'}
                backgroundColor={COLORS.primary}
                />
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
