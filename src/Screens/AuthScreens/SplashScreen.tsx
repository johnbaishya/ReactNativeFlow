import { View,Text } from "react-native";
import AppStyles from "../../Styles/appStyles";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";


const SplashScreen = ()=>{
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("LoginScreen" as never);
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
