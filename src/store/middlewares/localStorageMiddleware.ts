import { Middleware } from '@reduxjs/toolkit';

export const localStorageMiddleware:Middleware = ({ getState }) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('favorite', JSON.stringify(getState().favorite));
  return result;
};

export const reHydrateStore = () => {
  try {
    if (localStorage.getItem('favorite') !== null) {
      const result = JSON.parse(localStorage.getItem('favorite') || '');
      return result;
    }
  } catch {
    return {
      favoriteArticles: [],
    };
  }
  return {
    favoriteArticles: [],
  };
};
