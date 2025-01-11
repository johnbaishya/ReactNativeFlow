import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loginEmail:"",
    loginPassword:"",
    registerFirstName:"",
    registerLastName:"",
    registerEmail:"",
    registerPassword:"",
    registerPasswordConfirm:"",
};

export type InputsStateType = typeof initialState

export const inputsSlice = createSlice({
    name:"inputs",
    initialState:initialState,
    reducers:{
        updateInputsStore:(state,action)=>{
            let payload = action.payload;
            let keys = Object.keys(payload)

            for (let x of keys){
                state[x as keyof InputsStateType]  = payload[x]
            }
        },
        resetInputsStore:()=>{
            return initialState;
        }
    }
}) 

export const {updateInputsStore,resetInputsStore} = inputsSlice.actions;
export default inputsSlice.reducer;