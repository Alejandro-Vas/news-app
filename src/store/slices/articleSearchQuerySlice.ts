import { createSlice } from '@reduxjs/toolkit';

interface IArticleSearchQueryState {
  searchQuery: string;
  searchInputText: string;
}

const initialState = <IArticleSearchQueryState> {
  searchQuery: 'Russia',
  searchInputText: 'Russia',
};

const articleSearchQuerySlice = createSlice({
  name: 'articleSearchQuery',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      return { ...state, searchQuery: action.payload };
    },
    clearSearchQuery(state) {
      return { ...state, value: '' };
    },
    setSearchInputText(state, action) {
      return { ...state, searchInputText: action.payload };
    },
  },
});

export default articleSearchQuerySlice;
export const articleSearchQueryActions = articleSearchQuerySlice.actions;
