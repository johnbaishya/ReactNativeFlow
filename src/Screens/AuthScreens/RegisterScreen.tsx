import { ScrollView, View } from "react-native"
import AppStyles from "../../Styles/appStyles";
import { Button, Divider, Text, TextInput, useTheme } from "react-native-paper";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setInputsState } from "../../Redux/storeActions";
import { handleRegister } from "../../Controller/authController";
import loginScreenStyles from "../../Styles/ScrrenStyles/loginScreenStyles";
import inputStyles from "../../Styles/ComponentStyles/InputStyles";
import { useNavigation } from "@react-navigation/native";
import { LoginButton } from "../../Components/Button";

const RegisterScreen = ()=>{
    const {colors} = useTheme();
    const {registerFirstName,registerLastName,registerEmail,registerPassword,registerPasswordConfirm} = useSelector((state:RootState)=>state.inputs);
    const [pvisible,setPvisible] = useState(false);
    const [pCvisible,setPCvisible] = useState(false);
    const {registerLoading} = useSelector((state:RootState)=>state.app)
    const navigation = useNavigation();
    return(
        <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
            <ScrollView keyboardShouldPersistTaps="always">
                <View style={[loginScreenStyles.loginContainer]}>
                    <View style={[loginScreenStyles.registerTitleContainer]}>
                        <Text variant="displaySmall" style={{color:colors.primary, fontWeight:"bold"}}>Register</Text>
                    </View>
                    {/* <View style={[loginScreenStyles.logoContainer]}>
                        <Image source={IMAGES.userIcon} style={loginScreenStyles.logo} tintColor={colors.primary}/>
                    </View> */}
                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="flat"
                            value={registerFirstName}
                            onChangeText={(text)=>{
                                setInputsState({registerFirstName:text});
                            }}
                            placeholder="First Name"
                            left={<TextInput.Icon icon="account" color={colors.primary}/>}
                        />
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="flat"
                            value={registerLastName}
                            onChangeText={(text)=>{
                                setInputsState({registerLastName:text});
                            }}
                            placeholder="Family Name / Surname"
                            left={<TextInput.Icon icon="account" color={colors.primary}/>}
                        />
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="flat"
                            value={registerEmail}
                            keyboardType="email-address"
                            onChangeText={(text)=>{
                                setInputsState({registerEmail:text});
                            }}
                            placeholder="email"
                            left={<TextInput.Icon icon="email" color={colors.primary}/>}
                        />
                    </View>
                   
                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="flat"
                            value={registerPassword}
                            onChangeText={(text)=>{
                                setInputsState({registerPassword:text});
                            }}
                            placeholder="password"
                            secureTextEntry={!pvisible}
                            left={<TextInput.Icon icon="lock" color={colors.primary}/>}
                            right={<TextInput.Icon icon={pvisible?"eye":"eye-off"} onPress={()=>{setPvisible(!pvisible)}} 
                                color={colors.primary}
                                />}
                        />
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="flat"
                            value={registerPasswordConfirm}
                            onChangeText={(text)=>{
                                setInputsState({registerPasswordConfirm:text});
                            }}
                            placeholder="Re-type password"
                            secureTextEntry={!pCvisible}
                            left={<TextInput.Icon icon="lock" color={colors.primary}/>}
                            right={<TextInput.Icon icon={pCvisible?"eye":"eye-off"} onPress={()=>{setPCvisible(!pCvisible)}} 
                                    color={colors.primary}
                                />}
                        />
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <LoginButton
                        // style={loginScreenStyles.loginButton}
                        contentStyle={loginScreenStyles.loginButton}
                        mode="contained"
                        disabled={registerLoading}
                        loading={registerLoading}
                        onPress={()=>{
                            handleRegister();
                        }}>
                            <Text style={{fontSize:20}}>
                                Register
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
                        <Button mode="text" onPress={()=>{
                            navigation.navigate("LoginScreen" as never)
                        }}>
                            Already Have an Account
                            {/* <Text style={{fontSize:16,textDecorationLine:"underline"}}>Already Have an Account</Text> */}
                        </Button>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default RegisterScreen;