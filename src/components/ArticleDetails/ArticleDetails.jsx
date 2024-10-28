import React from 'react'
import { categoryColors } from '../CategoryColors/CategoryColors';


export default function ArticleDetails({article}) {
  return (
    <>
    <div className='w-full '>
    <span className="text-mypurple text-sm font-semibold mb-3">{article.date}</span>
        <h3 className="text-4xl font-bold text-mytitle dark:text-white mb-3">{article.title}</h3>
        <img
            src={article.image}
            alt={article.title}
            className="w-full h-[426px] object-cover mb-8"/>
        <p className="text-mygray dark:text-mytextdark text-base">{article.desc}</p>     
  
    {article.sections?.map((section, index) => (
        <div key={index} className="my-8 w-full text-mygray dark:text-mytextdark">
            <p>{section?.info}</p>
            <img src={section?.image} alt={`Section ${index + 1}`} className='w-full my-3' />
            <p className='mb-3 text-center px-[105.5px]'>{section?.descImg}</p>
            <p>{section?.content}</p>
        </div>
    ))}
     <div className="flex flex-wrap gap-2 mt-6">
        {article.category.map((cat, index) => {
          const { bg, text } = categoryColors[cat] || { bg: 'bg-bggreen', text: 'text-mygreen' };
          return (
            <span key={index} className={`${bg} ${text} text-sm font-medium px-[10px] py-[2px] rounded-2xl`}>
              {cat}
            </span>
          );
        })}
      </div>
</div>

      </>
  )
}
