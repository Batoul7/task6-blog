import { configureStore } from '@reduxjs/toolkit';
import articlesReducer, { darkModeReducer } from '../slice/index';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    darkMode: darkModeReducer,
  },
});
