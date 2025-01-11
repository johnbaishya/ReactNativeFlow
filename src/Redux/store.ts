import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./Slices/appSlice";
import inputsReducer from "./Slices/inputsSlice"


const store = configureStore({
  reducer: {
    app:appReducer,
    inputs:inputsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store;