import { configureStore } from '@reduxjs/toolkit';
import { articleSearchApi } from './articleSearch/articleSearchApi';
import articleSearchQuery from './articleSearchQuery/articleSearchQuerySlice';
import favoriteSlice from './favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    [articleSearchApi.reducerPath]: articleSearchApi.reducer,
    articleSearchQuery: articleSearchQuery.reducer,
    favoriteSlice: favoriteSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleSearchApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
