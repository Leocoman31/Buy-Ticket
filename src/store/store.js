import { configureStore } from "@reduxjs/toolkit";
import busReducer from "../slice/slice"



export const store = configureStore({
    reducer:{
        bus :busReducer
    }
})