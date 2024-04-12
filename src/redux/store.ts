import { configureStore } from '@reduxjs/toolkit';
import { searchBoxReducer } from './SearchBox/SearchBoxSlice';


export const store = configureStore({
    reducer: {
        search: searchBoxReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch