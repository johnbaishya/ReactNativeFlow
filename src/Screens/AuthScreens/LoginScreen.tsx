import { Image, ScrollView, Text, View } from "react-native";
import AppStyles from "../../Styles/appStyles";
import { Button, Divider, TextInput, useTheme } from "react-native-paper";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setInputsState } from "../../Redux/storeActions";
import { handleLogin } from "../../Controller/authController";
import loginScreenStyles from "../../Styles/ScrrenStyles/loginScreenStyles";
import inputStyles from "../../Styles/ComponentStyles/InputStyles";
import { IMAGES } from "../../Constants/themeConstants";
import { useNavigation } from "@react-navigation/native";
import { LoginButton } from "../../Components/Button";

const LoginScreen = ()=>{
    const {colors} = useTheme();
    const {loginEmail,loginPassword} = useSelector((state:RootState)=>state.inputs);
    const [pvisible,setPvisible] = useState(false);
    const {loginLoading} = useSelector((state:RootState)=>state.app);
    const navigation = useNavigation();
    return(
        <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
            <ScrollView keyboardShouldPersistTaps="always">
                <View style={[loginScreenStyles.loginContainer]}>
                    <View style={[loginScreenStyles.logoContainer]}>
                        <Image source={IMAGES.userIcon} style={loginScreenStyles.logo} tintColor={colors.primary}/>
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="flat"
                            value={loginEmail}
                            keyboardType="email-address"
                            onChangeText={(text)=>{
                                setInputsState({loginEmail:text});
                            }}
                            placeholder="email"
                            left={<TextInput.Icon icon="email"/>}
                        />
                    </View>

                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="flat"
                            value={loginPassword}
                            onChangeText={(text)=>{
                                setInputsState({loginPassword:text});
                            }}
                            placeholder="password"
                            secureTextEntry={pvisible}
                            left={<TextInput.Icon icon="lock"/>}
                            right={<TextInput.Icon icon={!pvisible ? "eye" : "eye-off"} onPress={()=>{setPvisible(!pvisible);}} />}
                        />
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <LoginButton
                        // style={loginScreenStyles.loginButton}
                        contentStyle={loginScreenStyles.loginButton}
                        mode="contained"
                        disabled={loginLoading}
                        loading={loginLoading}
                        onPress={()=>{
                            handleLogin();
                        }}>
                            <Text style={{fontSize:20}}>
                                Login
                            </Text>
                        </LoginButton>
                        {/* <Button
                        style={[loginScreenStyles.loginButton,{backgroundColor:colors.secondary}]}
                        mode="contained"
                        onPress={()=>{
                           setAppState({darkTheme:!darkTheme})
                        }}>
                            <Text style={{fontSize:20}}>
                                change theme
                            </Text>
                        </Button> */}
                    </View>
                    <Divider/>
                    <View style={{alignItems:"center"}}>
                        <Text>Don't have an account ?</Text>
                        <Button mode="text" onPress={()=>{navigation.navigate("RegisterScreen" as never);}}>
                            <Text style={{fontSize:18,textDecorationLine:"underline"}}>Register</Text>
                        </Button>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default LoginScreen;
