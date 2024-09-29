import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks for GET and POST requests
export const fetchData = createAsyncThunk('api/fetchData', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
});

export const postData = createAsyncThunk('api/postData', async (newData) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData);
    return response.data;
});

// Slice
const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        newPost: {},
        loading: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(postData.fulfilled, (state, action) => {
                state.newPost = action.payload;
            });
    },
});

export default apiSlice.reducer;
