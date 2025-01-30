import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    allUsersCount: 0,
    subscribedCount: 0
};

export const getStateData = createAsyncThunk("state/get",async () => {
    try {
        
    } catch (error) {
        toast.error()
    }
})

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export default stateSlice.reducer;