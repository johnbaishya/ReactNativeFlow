import { Dimensions } from "react-native";
const {width,height} = Dimensions.get('screen');


export const IMAGES = {
    userIcon: require("../Assets/icons/user.png") 
}

export const COLORS = {
    // for light theme
    primary:"green",
    background:"#fff",
    card:"#fff",
    text:"#000",
    textLight:"#8A8A8A",
    label:"#000",
    border:"#8A8A8A",
    textInputBackground:"#fff",
    placeholder:"#ababab",


    // for dark theme
    darkBackground:"#000",
    darkCard:"#121518",
    darkText:"#fff",
    darkTextLight:"#6C6E77",
    darklabel:"#fff",
    darkBorder:"#2A2F3A",
    darkTextInputBackground:"#121518",
    darkPlaceholder:"#454545",

     // common Colors
     white:"#fff",
     black:"#000",
     title:"#000",

}

export const SIZES = {
	fontLg:16,
    font:14,
	fontSm:13,
	fontXs:11,

	//radius
    radius_sm:8,
    radius:12,
	radius_md:18,

	//space
	padding:15,
	margin:15,

    //Font Sizes
    h1:40,
    h2:28,
    h3:24,
    h4:20,
    h5:18,
	h6:16,

    //App dimensions
    width,
    height,
	
};



export const FONTS = {
    fontLg   : {fontSize:SIZES.fontLg,color: COLORS.text, lineHeight:20, fontFamily:'Roboto-Regular'},
    font   : {fontSize:SIZES.font,color: COLORS.text, lineHeight:20, fontFamily:'Roboto-Regular'},
	fontSm : {fontSize:SIZES.fontSm,color: COLORS.text, lineHeight:18, fontFamily:'Roboto-Regular'},
	fontXs : {fontSize:SIZES.fontXs,color: COLORS.text, lineHeight:14, fontFamily:'Roboto-Regular'},
    h1     : {fontSize:SIZES.h1, color:COLORS.title, fontFamily:'DMSans-Bold'},
    h2     : {fontSize:SIZES.h2, color:COLORS.title, fontFamily:'DMSans-Bold'},
    h3     : {fontSize:SIZES.h3, color:COLORS.title, fontFamily:'DMSans-Bold'},
    h4     : {fontSize:SIZES.h4, color:COLORS.title, fontFamily:'DMSans-Bold'},
    h5     : {fontSize:SIZES.h5, color:COLORS.title, fontFamily:'DMSans-Bold'},
    h6     : {fontSize:SIZES.h6, color:COLORS.title, fontFamily:'DMSans-Bold'},
	fontBold : {fontFamily : 'Roboto-Bold'},
	fontMedium : {fontFamily : 'Roboto-Medium'},
	fontTitle : {fontFamily : 'DMSans-Medium'},
	fontRegular : {fontFamily : 'DMSans-Regular'},
}