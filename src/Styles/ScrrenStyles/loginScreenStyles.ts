import { StyleSheet } from "react-native";

const loginScreenStyles = StyleSheet.create({
    loginContainer:{
        width:"100%",
        paddingVertical:50,
        paddingHorizontal:20,
    },
    loginButton:{
        borderRadius:10,
        // paddingVertical:4,
        height:50,
    },
    loginButtonText:{
        fontSize:22,
        // marginVertical:50,
    },
    logoContainer:{
        marginVertical:20,
        width:"100%",
        alignItems:'center',
    },
    logo:{
        height:80,
        resizeMode:"contain",
        aspectRatio:"1/1",
    },
    registerTitleContainer:{
        width:"100%",
        alignItems:"center",
        marginVertical:10,
    },
});

export default loginScreenStyles;