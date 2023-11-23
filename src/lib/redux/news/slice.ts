import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./thunk.ts";
import { InitialState } from "./common.ts";

const initialState: InitialState = {
  isLoading: false,
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload.articles;
      state.isLoading = false;
    });

    builder.addCase(getNews.rejected, (state, action) => {
      state.news = [];
      state.isLoading = false;
    });
  },
});

export const newsReducer = newsSlice.reducer;
