import { Text, View } from "react-native"
import AppStyles from "../../Styles/appStyles";
import { Button, TextInput } from "react-native-paper";
import React,{ useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setInputsState } from "../../Utils/storeFunctions";
import { handleLogin } from "../../Controller/authController";

const LoginScreen = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const {loginEmail,loginPassword} = useSelector((state:RootState)=>state.inputs);
    return(
        <View style={[AppStyles.container]}>
            <TextInput
                value={loginEmail}
                keyboardType="email-address"
                onChangeText={(loginEmail)=>{
                    setInputsState({loginEmail})
                }}
                placeholder="email"
                />
             <TextInput
                value={loginPassword}
                onChangeText={(loginPassword)=>{
                    setInputsState({loginPassword})
                }}
                placeholder="password"
                secureTextEntry
            />
            <Button onPress={()=>{
                handleLogin();
            }}>
                <Text>
                    Login
                </Text>
            </Button>
        </View>
    )
}

export default LoginScreen;