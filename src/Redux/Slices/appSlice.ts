import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:{},
    token:"",
    authenticated:false,
    appLoading:false,
    error:false,
    errorMessage:"",
    success:false,
    successMessage:"",
    loading:false,
    showSplashScreen:true,
    loginLoading:false,
    registerLoading:false,
    darkTheme:false,
};

export type appStateType = typeof initialState;

export const appSlice = createSlice({
    name:"app",
    initialState:initialState,
    reducers:{
        updateAppStore:(state,action)=>{
            let payload = action.payload;
            // let keys = Object.keys(payload);

            // for (let x of keys){
            //     state[x as keyof appStateType]  = payload[x]
            // }
            return {
                ...state,
                ...payload
            }
        },
        resetAppStore:()=>{
            return initialState;
        }
    }
}) 

export const {updateAppStore,resetAppStore} = appSlice.actions;
export default appSlice.reducer;