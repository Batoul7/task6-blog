
import { useEffect, useState } from 'react'

export default function ScrollToTop() {

    const [showScrollTo, setShowScrollTo] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTo(true)
            } else {
                setShowScrollTo(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
      <button
        onClick={handleScrollToTop}
        className={`${showScrollTo ? "translate-x-0" : "translate-x-40"}
         w-10 h-10 2xl:w-14 2xl:h-14 cursor-pointer rounded-md transition-all duration-300 ease-in-out 
         fixed bottom-5 right-5 z-40 dark:bg-white  bg-myprimary flex justify-center items-center hover:scale-110`}
      >
      <svg
          xmlns="http://www.w3.org/2000/svg" 
          className="w-7 h-7 text-white dark:text-myprimary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <line x1="12" y1="19" x2="12" y2="5" strokeLinecap="round" />
          <polyline points="5,12 12,5 19,12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    )
}