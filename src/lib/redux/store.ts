import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./news/slice.ts";
import thunk from "redux-thunk";
import { HttpService } from "../../services/http.service.ts";
import { env } from "../../common/env/env.ts";

export type AsyncThunkConfigWithServices = {
  extra: {
    httpService: HttpService;
  };
};

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      thunk.withExtraArgument({
        httpService: new HttpService({
          baseUrl: env.newsBaseUrl,
          apiKey: env.newsApiKey,
        }),
      }),
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
