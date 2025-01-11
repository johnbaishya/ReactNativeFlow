import { Text, View } from 'react-native';
import AppStyles from '../../Styles/appStyles';
import { Button, TextInput } from 'react-native-paper';
import React,{ useState } from 'react';


const RegisterScreen = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    return(
        <View style={[AppStyles.container]}>
             <TextInput
                value={firstName}
                onChangeText={(firstName)=>{
                    setFirstName(firstName)
                }}
                placeholder="First Name"
            />
             <TextInput
                value={lastName}
                onChangeText={(lastName)=>{
                    setLastName(lastName)
                }}
                placeholder="email"
            />
            <TextInput
                value={email}
                keyboardType="email-address"
                onChangeText={(email)=>{
                    setEmail(email);
                }}
                placeholder="email"
            />
             <TextInput
                value={password}
                onChangeText={(password)=>{
                    setPassword(password)
                }}
                placeholder="password"
                secureTextEntry
            />
            <Button>
                <Text>
                    Login
                </Text>
            </Button>
        </View>
    )
}

export default RegisterScreen;