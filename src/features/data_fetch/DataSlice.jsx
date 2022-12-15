import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    error:''
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        fetching: (state) => {
            state.loading=true
        },
        success: (state, action) => {
            state.loading = false
            state.data=action.payload
        },
        failed: (state) => {
            state.error='fetching error'
        }
    }
})
export const { fetching, success, failed } = dataSlice.actions;
export default dataSlice.reducer;