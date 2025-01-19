import { View,Text } from "react-native";
import AppStyles from "../../Styles/appStyles";
import { Button } from "react-native-paper";
import { unauthenticateApp } from "../../Services/AuthServices";


const HomeScreen = ()=>{
    return(
        <View style={[AppStyles.container,AppStyles.contentCenter]}>
            <Text style={[AppStyles.fontXL]}>
                home Screen
            </Text>
            <Button onPress={unauthenticateApp}>
                <Text>logout</Text>
            </Button>
        </View>
    )
}

export default HomeScreen;
