import React from 'react'
import Hero from '../components/Hero/Hero'
import { useDispatch, useSelector } from 'react-redux';
import { selectAllArticlesWithoutSections, selectPaginationData, setCurrentPage } from '../redux/slice/index';
import ArticleSection from '../components/ArticleSection/ArticleSection';
import Pagination from '../components/Pagination/Pagination';
import { categoryColors } from '../components/CategoryColors/CategoryColors';

export default function HomePage() {
  const dispatch = useDispatch();
  const { currentPage, articlesPerPage, totalArticles } = useSelector(selectPaginationData);
  const articlesWithoutSections = useSelector(selectAllArticlesWithoutSections);
  
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articlesWithoutSections.slice(indexOfFirstArticle, indexOfLastArticle);

  // count of total pages
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };
  // get recent articles without sections
  const recentArticles = Array.isArray(articlesWithoutSections) ? articlesWithoutSections.slice(-4) : [];

  return (
    <div className=' bg-white dark:bg-myprimary text-gray-800 dark:text-white min-h-screen pb-7.5 '>
      <Hero/>
    {/* Recent blog posts */}
      <ArticleSection
        title="Recent blog posts"
        articles={recentArticles}
        gridStyle="recent grid grid-cols-1 lg:grid-cols-2 gap-8"
        categoryColors={categoryColors}
        padding='py-7.5 px-8 lg:px-28'
      />
      {/* All blog posts */}
      <ArticleSection
        title="All blog posts"
        articles={currentArticles}
        gridStyle="all grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        categoryColors={categoryColors}
        padding='py-7.5 px-8 lg:px-28'  
      />
       {/* Pagination */}
      <Pagination handle={handlePageChange} currentPage={currentPage} totalPages={totalPages}/>
    </div>
  )
}
