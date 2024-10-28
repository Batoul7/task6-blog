import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const links = [
    {
      name:"Twitter",
      path:"https://x.com"
    },
    {
      name:"LinkedIn",
      path:"https://linkedin.com"
    },
    {
      name:"Email",
      path:"/newsletter"
    },
    {
      name:"RSS feed",
      path:"#"
    },
    {
      name:"Add to Feedly",
      path:"#"
    },
  ]
  return (
    <div className='flex gap-3.5 flex-col-reverse lg:flex-row text-center lg:text-start px-28 py-7.5 text-mytitle dark:text-white bg-white dark:bg-myprimary text-xl'>
     <span > © 2023</span>
      <div className='flex flex-col lg:flex-row gap-3.5'>
        {links.map((ele,index) => {
          return (
            <Link key={index} to={`${ele.path}`}>{ele.name}</Link>
          )
        })}
      </div>
    </div>
  )
}
