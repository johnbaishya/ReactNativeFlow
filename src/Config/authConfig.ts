import { LocalStorageKey } from '../Types/localStorage';
import { User } from '../Types/models';
import { getLocalData } from '../Utils/localStorage';
import { setAppState } from '../Redux/storeActions';
import { checkAppAuthenticationStatus, unauthenticateApp } from '../Services/AuthServices';





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
