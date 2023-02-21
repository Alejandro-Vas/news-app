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
      state.favoriteArticles.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favoriteArticles.filter((el) => el.id !== action.payload);
    },
  },
});

export default favorite;
export const favoriteActions = favorite.actions;
