import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setSearchBoxValue } from './SearchBoxSlice';


const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd769032a337632862f7141a18876e46d';

export const getMovieBySearch = createAsyncThunk(
    'search/getMovieBySearch',
    async (name: string, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`);
            return response.data.results;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const getTvVideoBySearch = createAsyncThunk(
    'search/getTvVideoBySearch',
    async (title: string, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${title}`);
            return response.data.results;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
// export function getTvVideoBySearch(title: string) {
//     return axios.get(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${title}`);
// }
// export const getMovieBySearch = createAsyncThunk(
//     'search/getMovieBySearch',
//     async (name: string, { rejectWithValue, dispatch }) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`);
//             console.log('response', response)
//             dispatch(setSearchBoxValue(response.data.results));
//             return response.data;
//         } catch (error: any) {
//             return rejectWithValue(error.message);
//         }
//     }
// );