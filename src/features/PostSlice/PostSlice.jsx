import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    posts: [],
    error:""
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{res.data})
})
const PostSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: builder => {
        builder.addCase()
    }
})