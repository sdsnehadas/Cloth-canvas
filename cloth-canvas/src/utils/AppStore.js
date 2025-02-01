import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './userSlice'
import categorySlice from "./categorySlice";
import gptReducer from "./GptSlice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        category:categorySlice,
        gpt:gptReducer
    }
} 
);
export default appStore;