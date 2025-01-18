import { createSelector, createSlice } from '@reduxjs/toolkit';
import { articles } from '../../Data/ArticleData';

const initialState = {
  articles: articles,
  currentPage: 1,
  articlesPerPage: 6, 
};

const darkModeInitialState = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: darkModeInitialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setArticlesPerPage: (state, action) => {
      state.articlesPerPage = action.payload;
    }, 
  },
});
// كل المقالات مع الاقسام
export const selectAllArticles = createSelector(
  (state) => state.articles.articles,
  (articles) => articles 
);
//  كل المقالات بلا الاقسام 
export const selectAllArticlesWithoutSections = createSelector(
  (state) => state.articles.articles,
  (articles) => articles.map((article) => {
    const { sections, ...articleWithoutSections } = article;
    return articleWithoutSections;
  })
);
// عدد من المقالات بلا الاقسام ومن دون المقال المفتوح
export const selectArticlesWithoutSections = (state, numberOfArticles, currentArticleId) => {
  return state.articles.articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, numberOfArticles) 
    .map(article => {
      const { sections, ...articleWithoutSections } = article;
      return articleWithoutSections;
    });
};

  export const selectPaginationData = createSelector(
    (state) => state.articles,
    (articlesState) => ({
      currentPage: articlesState.currentPage,
      articlesPerPage: articlesState.articlesPerPage,
      totalArticles: articlesState.articles.length,
    })
  );

export const selectSections = (state) => state.articles.sections;
export const selectDarkMode = (state) => state.darkMode.darkMode;

export const { setCurrentPage, setArticlesPerPage, setArticlesWithoutSections } = articlesSlice.actions; 
export const { toggleDarkMode } = darkModeSlice.actions;

export default articlesSlice.reducer;
export const darkModeReducer = darkModeSlice.reducer;
