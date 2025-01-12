import { LocalStorageKey } from "../Types/localStorage";
import { User } from "../Types/models";
import { getLocalData, removeLocalData, storeLocalData } from "../Utils/localStorage";
import { setAppState } from "../Redux/storeActions";

// to make the app authenticated by updating redux value and local storage
export const authenticateApp = async(user:Partial<User>)=>{
    await storeLocalData(LocalStorageKey.user,user);
    setAppState({user,authenticated:true,appLoading:false});
};

// to unauthenticate the app (logout)
export const unauthenticateApp = async()=>{
    await removeLocalData([LocalStorageKey.user]);
    setAppState({user:{},authenticated:false,appLoading:false});
};

// to  check the auth status of the app.
export const checkAppAuthenticationStatus = async():Promise<boolean>=>{
 let user = await getLocalData(LocalStorageKey.user);
 if(user){
    return true;
 }
 return false;
};