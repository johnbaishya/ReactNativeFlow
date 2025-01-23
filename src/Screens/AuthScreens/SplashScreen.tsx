import { View,Text } from "react-native";
import AppStyles from "../../Styles/appStyles";
import { useEffect } from "react";
import { setAppState } from "../../Redux/storeActions";
import { useTheme } from "react-native-paper";


const SplashScreen = ()=>{
    // const navigation = useNavigation();
    const {colors} = useTheme();
    useEffect(()=>{
        setTimeout(()=>{
            setAppState({showSplashScreen:false})
        },1000)
    },[])
    return(
        <View style={[AppStyles.container,AppStyles.contentCenter,{backgroundColor:colors.background}]}>
            <Text style={[AppStyles.fontXL]}>
                splash Screen
            </Text>
        </View>
    )
}

export default SplashScreen;
