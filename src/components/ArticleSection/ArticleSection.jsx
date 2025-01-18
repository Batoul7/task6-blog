import React from 'react';
import { Link } from 'react-router-dom';

const ArticleSection = ({ title, articles, gridStyle, categoryColors, padding}) => {
  console.log(articles);
  return (
    <section className={`${padding}`}>
      <h2 className="text-2xl font-semibold text-mytitle dark:text-white mb-8">{title}</h2>
      <div className={gridStyle}>
        {articles.map((article, index) => (
          <Link  to={`/article/${article.id}`} key={index} 
          data-aos="fade-up"
          data-aos-duration="2000"
          className={`flex gap-8 
            hover:shadow-xl transition-shadow duration-300
            ${gridStyle.includes('recent') ? `
              ${index === 0 ? 'flex-col md:row-span-2 md:col-span-1' : ''}
              ${index === articles.length - 1 ? 'flex-col lg:col-span-2 md:flex-col lg:flex-row' : ''}
              ${index === 1 || index === 2 ? 'flex-col md:flex-row gap-8 ' : ''}`
            : `flex-col`}
          `} >
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[240px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"/>
              </div>
              <div className={`${gridStyle.includes('recent') && index === articles.length - 1 ? 'xl:flex-1' : '' }`}>
                <span className="text-mypurple text-sm font-semibold mb-3">{article.date}</span>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-mytitle dark:text-white mb-3">{article.title}</h3>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-mytitle dark:stroke-white">
                      <path
                        d="M1 11L11 1M11 1H1M11 1V11"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                    </svg>
                </div>
                <p className="text-mygray dark:text-mytextdark text-base">{article.desc}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {article.category.map((cat, index) => {
                    const { bg, text } = categoryColors[cat] || { bg: 'bg-bggreen', text: 'text-mygreen' };
                    return (
                      <span key={index} className={`${bg} ${text} text-sm font-medium px-2 py-1 rounded-full`}>
                        {cat}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
