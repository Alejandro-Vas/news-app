import { configureStore } from "@reduxjs/toolkit";

import { articleSearchApi } from "./articleSearch/articleSearchApi";

export const store = configureStore({
  reducer: {
    [articleSearchApi.reducerPath]: articleSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleSearchApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
