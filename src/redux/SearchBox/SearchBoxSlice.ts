import { Movie } from '../../components/Trending/Trending';
import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getMovieBySearch, getTvVideoBySearch } from './operation';

type SearchBoxState = {
    searchedValue: Movie[];
    searchedTvValue: Movie[];
    isLoading: boolean,
    error: string | null | undefined,
};

const initialState: SearchBoxState = {
    searchedValue: [],
    searchedTvValue: [],
    isLoading: false,
    error: null,
};

const handleRejected = (state: SearchBoxState, action: { payload?: string }) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const searchBoxSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getMovieBySearch.fulfilled, (state, action: PayloadAction<Movie[]>) => {
            state.searchedValue = action.payload;
        }).addCase(getMovieBySearch.rejected, (state, action) => {
            if (action.payload) {
                handleRejected(state, action.payload);
            }
        }).addCase(getTvVideoBySearch.fulfilled, (state, action: PayloadAction<Movie[]>) => {
            state.searchedTvValue = action.payload;
        });
    }

});

export const searchBoxReducer = searchBoxSlice.reducer;

//Selector

export const selectSearchBoxValue = (state: RootState) => state.search.searchedValue;
export const selectSearchTvValue = (state: RootState) => state.search.searchedTvValue;
