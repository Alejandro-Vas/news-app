import { createSlice } from '@reduxjs/toolkit';

interface IArticleSearchQueryState {
  value: string;
}

const initialState = { value: 'Russia' } as IArticleSearchQueryState;

const articleSearchQuerySlice = createSlice({
  name: 'articleSearchQuery',
  initialState,
  reducers: {
    setArticleSearchQuery(state, action) {
      return { ...state, value: action.payload };
    },
    clearArticleSearchQuery(state) {
      return { ...state, value: '' };
    },
  },
});

export default articleSearchQuerySlice;
export const articleSearchQueryActions = articleSearchQuerySlice.actions;
