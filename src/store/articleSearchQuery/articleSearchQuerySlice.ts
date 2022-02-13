import { createSlice } from "@reduxjs/toolkit";

interface IArticleSearchQueryState {
  value: string;
}

const initialState = { value: "Москва" } as IArticleSearchQueryState;

const articleSearchQuerySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setArticleSearchQuery(state, action) {
      state.value = action.payload;
    },
    clearArticleSearchQuery(state) {
      state.value = "";
    },
  },
});

export default articleSearchQuerySlice;
export const articleSearchQueryActions = articleSearchQuerySlice.actions;
