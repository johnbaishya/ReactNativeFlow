import store from "../Redux/store";
import { setAppState } from "../Redux/storeActions";

export const changeTheme = ()=>{
    const darkTheme = store.getState().app.darkTheme;
    setAppState({darkTheme:!darkTheme});
};
