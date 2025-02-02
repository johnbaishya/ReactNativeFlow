import { DefaultTheme, MD3DarkTheme } from "react-native-paper";
import { COLORS } from "../Constants/themeConstants";
import { CustomThemeProp } from "../Types/themeTypes";


export const customLightTheme:CustomThemeProp = {
    colors:{
        ...DefaultTheme.colors,
        primary:COLORS.primary,
        background:COLORS.background,
        card:COLORS.card,
        text:COLORS.text,
        textLight:COLORS.textLight,
        label:COLORS.label,
        outline:COLORS.border,
        // for text input background
        surfaceVariant:COLORS.textInputBackground,
        onSurfaceVariant:COLORS.placeholder,
    },
    dark:true,
};

export const customDarkTheme:CustomThemeProp = {
    colors:{
        ...MD3DarkTheme.colors,
        primary:COLORS.primary,
        background:COLORS.darkBackground,
        card:COLORS.darkCard,
        text:COLORS.darkText,
        textLight:COLORS.darkTextLight,
        label:COLORS.darklabel,
        outline:COLORS.darkBorder,
        // for text input background
        surfaceVariant:COLORS.darkTextInputBackground,
        onSurfaceVariant:COLORS.darkPlaceholder,
    },
    dark:true,
};

