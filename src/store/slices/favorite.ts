import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DocsEntity } from '../../interfaces/IArticleSearchInterface';

const initialState = {
  favoriteArticles: <DocsEntity[]>[],
};

const favoriteState = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<DocsEntity>) => {
      state.favoriteArticles.push(action.payload);
    },

    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteArticles = state.favoriteArticles
        .filter((article) => article.id !== action.payload);
    },

    clearFavorite: (state) => {
      state.favoriteArticles = [];
    },
  },
});

export default favoriteState;
export const favoriteActions = favoriteState.actions;
