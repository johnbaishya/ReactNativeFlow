import { Image, ScrollView, Text, View } from "react-native"
import AppStyles from "../../Styles/appStyles";
import { Button, TextInput, useTheme } from "react-native-paper";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setAppState, setInputsState } from "../../Redux/storeActions";
import { handleLogin } from "../../Controller/authController";
import loginScreenStyles from "../../Styles/ScrrenStyles/loginScreenStyles";
import inputStyles from "../../Styles/ComponentStyles/InputStyles";
import { IMAGES } from "../../Constants/themeConstants";

const LoginScreen = ()=>{
    const {colors} = useTheme();
    const {loginEmail,loginPassword} = useSelector((state:RootState)=>state.inputs);
    const {darkTheme} = useSelector((state:RootState)=>state.app)
    return(
        <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
            <ScrollView>
                <View style={[loginScreenStyles.loginContainer]}>
                    <View style={[loginScreenStyles.logoContainer]}>
                        <Image source={IMAGES.userIcon} style={loginScreenStyles.logo} tintColor={colors.primary}/>
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="outlined"
                            value={loginEmail}
                            keyboardType="email-address"
                            onChangeText={(loginEmail)=>{
                                setInputsState({loginEmail});
                            }}
                            placeholder="email"
                        />
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="outlined"
                            value={loginPassword}
                            onChangeText={(loginPassword)=>{
                                setInputsState({loginPassword});
                            }}
                            placeholder="password"
                            secureTextEntry
                        />
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <Button 
                        style={loginScreenStyles.loginButton}
                        mode="contained"
                        onPress={()=>{
                            handleLogin();
                        }}>
                            <Text style={{fontSize:20}}>
                                Login
                            </Text>
                        </Button>
                        <Button 
                        style={[loginScreenStyles.loginButton,{backgroundColor:colors.secondary}]}
                        mode="contained"
                        onPress={()=>{
                           setAppState({darkTheme:!darkTheme})
                        }}>
                            <Text style={{fontSize:20}}>
                                change theme
                            </Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LoginScreen;