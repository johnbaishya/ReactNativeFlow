import { ThemeProp } from "react-native-paper/lib/typescript/types";


export type CustomThemeProp = ThemeProp & {
    colors:{
        text:string,
        textLight:string,
        label:string,
        card:string,
    }
};