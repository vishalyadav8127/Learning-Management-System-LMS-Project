import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from"../../Helpers/axiosinstance";

const initialStage = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role:localStorage.getItem('role') || "",
    data:localStorage.getItem('data') || {},
};

export const createAccount = createAsyncThunk("/auth/signup",async (data) =>{
    try {
        const res = axiosInstance.post("user/register",data)
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.responce?.data?.message);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState:null,
    reducers:{},
});

//export const {} authSlice.actions;
export default authSlice.reducer;