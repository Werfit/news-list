import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AsyncThunkConfigWithServices } from "../store.ts";
import { Response } from "./common.ts";

const getNews = createAsyncThunk<Response, void, AsyncThunkConfigWithServices>(
  "news/get-news",
  async (_, { extra: { httpService }, rejectWithValue }) => {
    try {
      const result = await httpService.get("/everything", {
        q: "bitcoin",
        pageSize: 10,
        page: 1,
      });
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export { getNews };
