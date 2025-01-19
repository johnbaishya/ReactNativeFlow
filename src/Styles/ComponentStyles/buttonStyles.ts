import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

const buttonStyles = ()=>{
    const theme = useTheme();
    StyleSheet.create({
        primary:{
            backgroundColor:theme.colors.primary,
        }
    })
}