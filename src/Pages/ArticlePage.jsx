import React from 'react'
import {  useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { selectAllArticles, selectArticlesWithoutSections } from '../redux/slice';
import ArticleSection from '../components/ArticleSection/ArticleSection';
import { categoryColors } from '../components/CategoryColors/CategoryColors';
import Subscribe from '../components/Subscribe/Subscribe';
import ArticleDetails from '../components/ArticleDetails/ArticleDetails';

export default function ArticlePage() {
    const { id } = useParams(); 

    const articles = useSelector(selectAllArticles);
    const article = articles?.find((art) => art.id === parseInt(id)); 
    const numberOfArticles = 9;
    const recentArticles = useSelector(state => selectArticlesWithoutSections(state, numberOfArticles, parseInt(id)));

    return (
        <>
        <div className=" px-8 lg:px-28 dark:bg-myprimary " >
            <div className='flex flex-col-reverse lg:flex-row gap-8 pb-7.5'>
            {/* Recent blog posts */}
            <ArticleSection
                title="Recent blog posts"
                articles={recentArticles}
                gridStyle=" grid md:grid-cols-2 lg:grid-cols-1 gap-8 lg:w-[342px]"
                categoryColors={categoryColors}
                padding='0'/>
    
            {/* Article content */}
            <ArticleDetails article={article} />
            </div>
            <Subscribe style=' xl:w-[58.473vw] xl:ms-auto'/>
        </div>
          </>
    );
}
