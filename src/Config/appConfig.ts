import { LocalStorageKey } from '../Types/localStorage';
import { User } from '../Types/models';
import { getLocalData } from '../Utils/localStorage';
import { setAppState } from '../Redux/storeActions';
import { checkAppAuthenticationStatus, unauthenticateApp } from '../Services/AuthServices';
import { Appearance } from 'react-native';





// this method checks the if auth crendentials and token are stored in the localstorage. if yes then authenticate the app, otherwise unauthenticate the app. this function is trigerred initially while opening the app.
const initializeAuth = async()=>{
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

const darkModeChangedListener = ()=>{
    // Appearance.addChangeListener(
    //     listener: (preferences: {colorScheme: 'light' | 'dark' | null}) => void,
    //   ): NativeEventSubscription;
    Appearance.addChangeListener((data)=>{
        let colorScheme = data.colorScheme;
        let darkMode = colorScheme==="dark"?true:false;

        setAppState({darkTheme:darkMode});
    })
}


const DecideDarkMode = ()=>{
    const colorScheme  = Appearance.getColorScheme();
    let darkMode = false;
    if(colorScheme==="dark"){
        darkMode = true;
    }
    setAppState({
        darkTheme:darkMode,
    })
}

 

const appConfig = ()=>{
    initializeAuth();
    DecideDarkMode();
    darkModeChangedListener();
}

export default appConfig;
