import { configureStore } from "@reduxjs/toolkit";
import authSliceRedcer from './Slices/AuthSlice';
import courseSliceReducer from './Slices/CourseSlice';
import razorpaySliceReducer from './Slices/RazorpaySlice';
import lectureSliceReducer from './Slices/LectureSlice';

const store = configureStore({
    reducer:{
        auth: authSliceRedcer,
        course: courseSliceReducer,
        razorpay:razorpaySliceReducer,
        lecture:lectureSliceReducer
    },
    devTools:true
});

export default store;