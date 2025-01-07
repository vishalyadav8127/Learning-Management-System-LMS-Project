import { configureStore } from "@reduxjs/toolkit";
import authSliceRedcer from './Slices/AuthSlice';
import courseSliceReducer from './Slices/CourseSlice';
import razorpaySliceReducer from './Slices/CourseSlice';

const store = configureStore({
    reducer:{
        auth: authSliceRedcer,
        course: courseSliceReducer,
        razorpay:razorpaySliceReducer
    },
    devTools:true
});

export default store;