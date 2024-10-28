import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

export default function NavItems({items,show}) {
  
  return (
    <>
       <ul className='flex flex-col lg:flex-row gap-8 lg:gap-0  items-center'>
            {items?.map((item,index) => {
                return (
                    <li key={index} 
                    className='flex items-center capitalize px-3.5 p-2'
                    onClick={() => show(prev => !prev)}><Link to={`${item.path}`} className='text-xl font-normal'>{item.name}</Link></li>
                )
            })}
            <DarkModeToggle/>
        </ul>
       
         
    </>
  )
}
