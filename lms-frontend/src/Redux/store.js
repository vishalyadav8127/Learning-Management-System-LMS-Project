import { configureStore } from "@reduxjs/toolkit";
import authSliceRedcer from './Slices/AuthSlice';

const store = configureStore({
    reducer:{
        auth: authSliceRedcer
    },
    devTools:true
});

export default store;