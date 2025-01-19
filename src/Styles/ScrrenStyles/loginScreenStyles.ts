import { StyleSheet } from "react-native";

const loginScreenStyles = StyleSheet.create({
    loginContainer:{
        width:"100%",
        paddingVertical:50,
        paddingHorizontal:10,
    },
    loginButton:{
        borderRadius:5,
        paddingVertical:5
        // height:50,
    },
    logoContainer:{
        marginVertical:20,
        width:"100%",
        alignItems:'center',
    },
    logo:{
        height:100,
        resizeMode:"contain",
        aspectRatio:"1/1"
    }
});

export default loginScreenStyles;