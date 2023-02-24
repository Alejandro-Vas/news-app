import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DocsEntity } from '../../interfaces/IArticleSearchInterface';

const initialState = {
  favoriteArticles: <DocsEntity[]>[],
};

const favorite = createSlice({
  name: 'articleSearchQuery',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<DocsEntity>) {
      return {
        ...state,
        favoriteArticles: [...state.favoriteArticles, action.payload],
      };
    },

    removeFavorite(state, action: PayloadAction<string>) {
      return {
        ...state,
        favoriteArticles: state.favoriteArticles.filter((article) => article.id !== action.payload),
      };
    },

    clearFavorite(state) {
      return {
        ...state,
        favoriteArticles: [],
      };
    },
  },
});

export default favorite;
export const favoriteActions = favorite.actions;
