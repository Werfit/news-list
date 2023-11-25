import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AsyncThunkConfigWithServices, RootState } from "../store.ts";
import { NewsResponse } from "./common.ts";

const getNews = createAsyncThunk<
  NewsResponse,
  void,
  AsyncThunkConfigWithServices
>(
  "news/get-news",
  async (_, { extra: { httpService }, rejectWithValue, getState }) => {
    const state = getState() as RootState;

    const query = {
      q: state.news.filters.category,
      pageSize: state.news.pageSize,
      page: state.news.page,
    };

    if (state.news.filters.keywords.length) {
      query.q = `${query.q},${state.news.filters.keywords}`;
    }

    try {
      const result = await httpService.get<NewsResponse>("/everything", query);

      if (result.status === "error") {
        return rejectWithValue(result.status);
      }
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export { getNews };
