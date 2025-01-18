import React from 'react'
import ArticleSection from '../components/ArticleSection/ArticleSection';
import { selectArticlesWithoutSections } from '../redux/slice';
import { useSelector } from 'react-redux';
import Subscribe from '../components/Subscribe/Subscribe';
import { categoryColors } from '../components/CategoryColors/CategoryColors';

export default function Newsletter() {
  const numberOfArticles = 3;
  const recentArticles = useSelector(state => selectArticlesWithoutSections(state, numberOfArticles));
  
  return (
    <div className='pb-7.5 px-8 lg:px-28 dark:bg-myprimary' >
      <Subscribe/>
      <ArticleSection
          title="All blog posts"
          articles={recentArticles}
          gridStyle="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          categoryColors={categoryColors}
          padding='0'
        />
        </div>
  )
}
