import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import loginScreenStyles from "../Styles/ScrrenStyles/loginScreenStyles";



export const LoginButton = (props:ButtonProps)=>{
    return(
        <Button
        {...props}
        style={loginScreenStyles.loginButton}
        mode="contained"
        disabled={props.disabled}
        loading={props.loading}
        onPress={props.onPress}>
            {props.children}
        </Button>
    )
}
