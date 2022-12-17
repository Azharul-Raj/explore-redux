import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    posts: [],
    error:""
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/post')
    return res.data;
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         console.log(res.data)
    //     })
})
const PostSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchPosts.fulfilled, (state, {payload}) => {
            state.loading = false,
                state.posts=payload
        })
        builder.addCase(fetchPosts.rejected, (state, { error }) => {
            state.error=error.message
        })
    }
})
export default PostSlice.reducer;