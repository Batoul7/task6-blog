import React, { useEffect, useState } from 'react'
import NavItems from './NavItems'
import { useSelector } from 'react-redux';
import { navItems } from '../../Data/NavLinkData';

export default function NavBar() {
  const [active, setActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false); 
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) { 
           setIsFixed(true); 
        } else {
           setIsFixed(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <>
    <nav className={`4xl:container 4xl:mx-auto flex justify-between items-center h-[72px] lg:h-[125px] px-5 lg:px-28 py-6 lg:py-7.5
     bg-white dark:bg-myprimary text-mytitle dark:text-white
      ${isFixed ? 'fixed w-full top-0 z-50 transition-all duration-300 ease-in-out shadow-sm shadow-myprimary dark:shadow-white' : 'relative'} `}>
        <h1 className='text-xl font-semibold'>BATOUL</h1>
        <div className='hidden lg:flex w-70 justify-between items-center'>
          <NavItems items={navItems} btn="log in" />
        </div>
        <button className='lg:hidden text-mytitle dark:text-white'
        onClick={() => setActive(prev => !prev)}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-mytitle dark:fill-white">
          <g clipPath="url(#clip0_1342_1605)">
            <path d="M26.7333 14.667H5.26667C4.56711 14.667 4 15.2341 4 15.9337V16.067C4 16.7666 4.56711 17.3337 5.26667 17.3337H26.7333C27.4329 17.3337 28 16.7666 28 16.067V15.9337C28 15.2341 27.4329 14.667 26.7333 14.667Z" />
            <path d="M26.7333 21.333H5.26667C4.56711 21.333 4 21.9001 4 22.5997V22.733C4 23.4326 4.56711 23.9997 5.26667 23.9997H26.7333C27.4329 23.9997 28 23.4326 28 22.733V22.5997C28 21.9001 27.4329 21.333 26.7333 21.333Z" />
            <path d="M26.7333 8H5.26667C4.56711 8 4 8.56711 4 9.26667V9.4C4 10.0996 4.56711 10.6667 5.26667 10.6667H26.7333C27.4329 10.6667 28 10.0996 28 9.4V9.26667C28 8.56711 27.4329 8 26.7333 8Z" />
          </g>
        <defs>
        <clipPath id="clip0_1342_1605">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
 </button>
    </nav>
    <div className={`menu lg:hidden transition-all duration-300
       ${active ? 'translate-x-0': 'translate-x-full'} fixed top-0 h-screen w-full
        bg-white dark:bg-myprimary text-mytitle dark:text-white z-50`}>
    <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
    <h1 className='text-center text-x18 font-semibold mb-10'>BATOUL</h1>
    <NavItems items={navItems} show={setActive} />
    </div>
    <button className='absolute bottom-5 left-2/4 -translate-x-2/4'
        onClick={() => setActive(prev => !prev)}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill='none' xmlns="http://www.w3.org/2000/svg"
        className="fill-mytitle dark:fill-white">
        <g clip-path="url(#clip0_1369_6772)">
        <path d="M24.5324 23.0749L9.35319 7.89567C8.85852 7.401 8.05652 7.401 7.56185 7.89567L7.46757 7.98995C6.97291 8.48461 6.97291 9.28662 7.46757 9.78129L22.6468 24.9605C23.1415 25.4552 23.9435 25.4552 24.4381 24.9605L24.5324 24.8662C25.0271 24.3716 25.0271 23.5696 24.5324 23.0749Z"/>
        <path d="M22.6469 7.92511L7.46769 23.1043C6.97303 23.599 6.97303 24.401 7.46769 24.8957L7.56197 24.9899C8.05663 25.4846 8.85864 25.4846 9.35331 24.9899L24.5325 9.81072C25.0272 9.31606 25.0272 8.51405 24.5325 8.01939L24.4383 7.92511C23.9436 7.43044 23.1416 7.43044 22.6469 7.92511Z" />
        </g>
        <defs>
        <clipPath id="clip0_1369_6772">
        <rect width="32" height="32" fill="none" />
        </clipPath>
        </defs>
        </svg>
    </button>
    </div>
    </>
  )
}
