import { View,Text } from "react-native";
import AppStyles from "../../Styles/appStyles";
import { useEffect } from "react";
import { setAppState } from "../../Redux/storeActions";


const SplashScreen = ()=>{
    // const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            setAppState({showSplashScreen:false})
        },1000)
    },[])
    return(
        <View style={[AppStyles.container,AppStyles.contentCenter]}>
            <Text style={[AppStyles.fontXL]}>
                splash Screen
            </Text>
        </View>
    )
}

export default SplashScreen;
