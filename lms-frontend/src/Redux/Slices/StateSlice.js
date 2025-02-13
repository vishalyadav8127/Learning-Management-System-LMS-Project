import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosinstance";

const initialState = {
    allUsersCount: 0,
    subscribedCount: 0
};

export const getStatsData = createAsyncThunk("state/get",async () => {
    try {
        const response = axiosInstance.get("/admin/stats/users");
        toast.promise(response, {
            loading: "Getting the stats...",
            success: (data) => {
                return data?.data?.message
            },
            error: "Failed to load data stats"
        });
        return (await response).data;
    }
    catch (error) {
        toast.error()
    }
})

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStatsData.fulfilled, (state, action) => {
            state.allUsersCount = action?.payload?.allUsersCount;
            state.subscribedCount =  action?.payload?.subscribedUsersCount;
        })
    }
});

export default stateSlice.reducer;