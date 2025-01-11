import { LocalStorageKey } from '../Types/localStorage';
import { User } from '../Types/models';
import { getLocalData, removeLocalData, storeLocalData } from '../Utils/localStorage';
import { setAppState } from '../Utils/storeFunctions';


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


// this method checks the if auth crendentials and token are stored in the localstorage. if yes then authenticate the app, otherwise unauthenticate the app. this function is trigerred initially while opening the app.
export const intializeAuth = async()=>{
    setAppState({appLoading:true});
    let appAuth = await checkAppAuthenticationStatus();
    if(appAuth){
        let user = await getLocalData(LocalStorageKey.user) as User;
        // await authenticateApp(user);
        setAppState({user,authenticated:true,appLoading:false});
    }else{
        await unauthenticateApp();
    }
};
