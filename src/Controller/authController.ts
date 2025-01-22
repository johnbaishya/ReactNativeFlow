import axios from "axios";
import ApiUri from "../Constants/uriConstants";
import store from "../Redux/store";
import { resetInputsState, setAppState } from "../Redux/storeActions";
import { User } from "../Types/models";
import { loginApi, registerApi } from "../Services/Api/authentication";
import { authenticateApp } from "../Services/AuthServices";

export const setDefaultHeaders = (token:string,url:string=ApiUri.BaseUri)=>{
    axios.defaults.baseURL = url;
    axios.defaults.headers.common['Authorization'] = "Bearer "+token;
}

export const clearDefaultHeaders = ()=>{
    delete axios.defaults.baseURL
    delete axios.defaults.headers.common['Authorization']
}


export const handleLogin = ()=>{
    const {loginEmail,loginPassword} =store.getState().inputs;
    if(!loginEmail||!loginPassword){
        console.log("here")
        setAppState({
            error:true,
            errorMessage:"All fields are required"
        });
        return;
    }

    setAppState({
        loginLoading:true,
    });

    loginApi({email:loginEmail,password:loginPassword})
    .then(res=>{
        console.log(res.data);
        let user:Partial<User> = res.data as Partial<User>;
        authenticateApp(user)
        resetInputsState();
        setAppState({
            loading:false,
            loginLoading:false,
        });
    })
    .catch(err=>{
        console.log(err);
        setAppState({error:true,errorMessage:"something went wrong"})
        setAppState({
            loading:false,
            loginLoading:false,
        });
    })
}


const checkPasswordConfirmation = (p1:string,p2:string):boolean=>{
    return p1 === p2;
}

export const handleRegister = ()=>{
    const {registerFirstName,registerLastName,registerEmail,registerPassword,registerPasswordConfirm} =store.getState().inputs;
    if(!registerFirstName||!registerLastName||!registerEmail||!registerPassword||!registerPasswordConfirm){
        setAppState({
            error:true,
            errorMessage:"All fields are required"
        });
        return;
    }

    if(!checkPasswordConfirmation(registerPassword,registerPasswordConfirm)){
        setAppState({
            error:true,
            errorMessage:"confirm password didn't matched",
        });
        return;
    }

    setAppState({
        registerLoading:true,
    });

    registerApi({email:registerEmail,password:registerPassword,first_name:registerFirstName,last_name:registerLastName})
    .then(res=>{
        console.log(res.data);
        let user:Partial<User> = res.data as Partial<User>;
        authenticateApp(user)
        resetInputsState();
        setAppState({
            loading:false,
            registerLoading:false,
        });
    })
    .catch(err=>{
        console.log(err);
        setAppState({error:true,errorMessage:"something went wrong"})
        setAppState({
            loading:false,
            loginLoading:false,
        });
    })
}