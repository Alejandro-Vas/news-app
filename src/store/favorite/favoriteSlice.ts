import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavorite } from "./../../interfaces/IFavorite";

const initialState: IFavorite[] = [];

const favoriteSlice = createSlice({
  name: "articleSearchQuery",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IFavorite>) {
      state.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<IFavorite>) {
      return state.filter((el) => {
        return el._id !== action.payload._id;
      });
    },
  },
});

export default favoriteSlice;
export const favoriteActions = favoriteSlice.actions;
