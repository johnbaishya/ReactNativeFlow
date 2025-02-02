import { View,Text } from "react-native";
import AppStyles from "../../Styles/appStyles";
import { Button, useTheme } from "react-native-paper";
import { unauthenticateApp } from "../../Services/AuthServices";


const TestScreen1 = ()=>{
    const {colors} = useTheme();
    return(
        <View style={[AppStyles.container,AppStyles.contentCenter,{backgroundColor:colors.background}]}>
            <Text style={[AppStyles.fontXL]}>
                Test 1 Screen
            </Text>
            <Button onPress={unauthenticateApp}>
                <Text>logout</Text>
            </Button>
        </View>
    )
}

export default TestScreen1;
