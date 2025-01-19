import { ThemeProp } from "react-native-paper/lib/typescript/types";


export type CustomThemeProp = ThemeProp &{
    colors:{
        textLight:string,
        label:string,
        card:string,
    }
};