import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNews } from "./thunk.ts";
import { FilterAddition, InitialState } from "./common.ts";
import {
  NEWS_CATEGORIES,
  NEWS_COUNTRIES,
} from "../../../common/constants/filters.ts";

const initialState: InitialState = {
  isLoading: false,
  pageSize: 10,
  totalSize: 0,
  page: 1,
  news: [],
  filters: {
    category: NEWS_CATEGORIES[0],
    country: NEWS_COUNTRIES[0],
    keywords: "",
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    addFilter(state, action: PayloadAction<FilterAddition>) {
      state.filters[action.payload.filterName] = action.payload.filterValue;
    },
    changePageSize(state, action: PayloadAction<{ pageSize: number }>) {
      state.pageSize = action.payload.pageSize;
    },
    changePage(state, action: PayloadAction<{ page: number }>) {
      state.page = action.payload.page;
    },
    changeKeywords(state, action: PayloadAction<{ keywords: string }>) {
      state.filters.keywords = action.payload.keywords;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload.articles;
      state.isLoading = false;
      state.totalSize = action.payload.totalResults;
    });

    builder.addCase(getNews.rejected, (state) => {
      state.news = [];
      state.isLoading = false;
    });
  },
});

export const { addFilter, changePageSize, changePage, changeKeywords } =
  newsSlice.actions;

export const newsReducer = newsSlice.reducer;
