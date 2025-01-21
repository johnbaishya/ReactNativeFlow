import { Image, ScrollView, Text, View } from "react-native"
import AppStyles from "../../Styles/appStyles";
import { Button, Divider, Icon, TextInput, useTheme } from "react-native-paper";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { setAppState, setInputsState } from "../../Redux/storeActions";
import { handleLogin } from "../../Controller/authController";
import loginScreenStyles from "../../Styles/ScrrenStyles/loginScreenStyles";
import inputStyles from "../../Styles/ComponentStyles/InputStyles";
import { IMAGES } from "../../Constants/themeConstants";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = ()=>{
    const {colors} = useTheme();
    const {registerFirstName,registerLastName,registerEmail,registerPassword,registerPasswordConfirm} = useSelector((state:RootState)=>state.inputs);
    const [pvisible,setPvisible] = useState(false);
    const {darkTheme,loginLoading} = useSelector((state:RootState)=>state.app)
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
                            value={registerFirstName}
                            onChangeText={(text)=>{
                                setInputsState({registerFirstName:text});
                            }}
                            placeholder="First Name"
                            left={<TextInput.Icon icon="account"/>}
                        />
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <TextInput
                            mode="flat"
                            value={registerFirstName}
                            onChangeText={(text)=>{
                                setInputsState({registerFirstName:text});
                            }}
                            placeholder="Family Name / Surname"
                            left={<TextInput.Icon icon="account"/>}
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
                            left={<TextInput.Icon icon="email"/>}
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
                            secureTextEntry={pvisible}
                            left={<TextInput.Icon icon="lock"/>}
                            right={<TextInput.Icon icon={!pvisible?"eye":"eye-off"} onPress={()=>{setPvisible(!pvisible)}} />}
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
                            secureTextEntry={pvisible}
                            left={<TextInput.Icon icon="lock"/>}
                            right={<TextInput.Icon icon={!pvisible?"eye":"eye-off"} onPress={()=>{setPvisible(!pvisible)}} />}
                        />
                    </View>
                    <View style={[inputStyles.inputContainer]}>
                        <Button
                        style={loginScreenStyles.loginButton}
                        mode="contained"
                        disabled={loginLoading}
                        loading={loginLoading}
                        onPress={()=>{
                            handleLogin();
                        }}>
                            <Text style={{fontSize:20}}>
                                Register
                            </Text>
                        </Button>
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
                            <Text style={{fontSize:16,textDecorationLine:"underline"}}>Already Have an Account</Text>
                        </Button>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default RegisterScreen;