import { appStateType, resetAppStore, updateAppStore } from '../Redux/Slices/appSlice';
import { InputsStateType, resetInputsStore, updateInputsStore } from '../Redux/Slices/inputsSlice';
import store from '../Redux/store';

export const setAppState = (data: Partial<appStateType>)=>{
    store.dispatch(updateAppStore(data));
};

export const resetAppState = ()=>{
    store.dispatch(resetAppStore());
};

export const setInputsState = (data:Partial<InputsStateType>)=>{
    store.dispatch(updateInputsStore(data));
};

export const resetInputsState = ()=>{
    store.dispatch(resetInputsStore());
};