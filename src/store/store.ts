import { configureStore } from '@reduxjs/toolkit';
import { articleSearchApi } from './articleSearch/articleSearchApi';
import articleSearchQuery from './articleSearchQuery/articleSearchQuerySlice';
import favorite from './favorite/favoriteSlice';
import rtkQueryErrorLogger from './middlewares/rtkQueryErrorLogger';

export const store = configureStore({
  reducer: {
    [articleSearchApi.reducerPath]: articleSearchApi.reducer,
    articleSearchQuery: articleSearchQuery.reducer,
    favorite: favorite.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(articleSearchApi.middleware)
    .concat(rtkQueryErrorLogger),
});

export type TypeRootState = ReturnType<typeof store.getState>;
