import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  hasMore: false,
  totalResults: 0,
  page: 0,
  totalPages: 0,
  isFetching: false,
};

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    getPopularMovies: (state) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    fetchedPopularMovies: (state, action) => {
      return {
        ...state,
        results: [...state.results, ...action.payload.data.results],
        hasMore: action.payload.data.page < action.payload.data.total_pages,
        totalResults: action.payload.data.total_results,
        page: action.payload.data.page,
        totalPages: action.payload.totalPages,
        isFetching: false,
      };
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const { getPopularMovies, fetchedPopularMovies, resetState } =
  moviesSlice.actions;

export default moviesSlice.reducer;
