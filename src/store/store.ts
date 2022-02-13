import { configureStore } from "@reduxjs/toolkit";

import { articleSearchApi } from "./articleSearch/articleSearchApi";

import articleSearchQuery from "./articleSearchQuery/articleSearchQuerySlice";

export const store = configureStore({
  reducer: {
    [articleSearchApi.reducerPath]: articleSearchApi.reducer,
    articleSearchQuery: articleSearchQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleSearchApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
