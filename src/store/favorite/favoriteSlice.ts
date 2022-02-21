import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocsEntity } from "./../../interfaces/IArticleSearchInterface";

const initialState: DocsEntity[] = [];

const favoriteSlice = createSlice({
  name: "articleSearchQuery",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<DocsEntity>) {
      state.push(action.payload);
    },
    removeFavorite(state, action) {
      return state.filter((el) => {
        return el._id !== action.payload;
      });
    },
  },
});

export default favoriteSlice;
export const favoriteActions = favoriteSlice.actions;
