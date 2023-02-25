import { configureStore } from '@reduxjs/toolkit';
import { articleSearchApi } from './api/articleSearchApi';
import articleSearchQuery from './slices/articleSearchQuery';
import favorite from './slices/favorite';
import notifications from './slices/notifications';
import rtkQueryErrorLogger from './middlewares/rtkQueryErrorLogger';
import { reHydrateStore, localStorageMiddleware } from './middlewares/localStorageMiddleware';

export const store = configureStore({
  reducer: {
    [articleSearchApi.reducerPath]: articleSearchApi.reducer,
    articleSearchQuery: articleSearchQuery.reducer,
    favorite: favorite.reducer,
    notifications: notifications.reducer,
  },
  preloadedState: { favorite: reHydrateStore() },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(articleSearchApi.middleware)
    .concat(rtkQueryErrorLogger)
    .concat(localStorageMiddleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
