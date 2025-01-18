import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from './Pages/HomePage'
import ArticlePage from './Pages/ArticlePage'
import Newsletter from './Pages/Newsletter'
import Footer from './components/Footer/Footer'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Preloader from './components/Preloader/Preloader'
import { useEffect, useState } from 'react'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


function App() {

  const [showPreloader, setShowPreloader] = useState(true)
  

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    })

    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)

    return () => clearTimeout(timer)
    

  }, [])


  return (
    <>
    {showPreloader ? <Preloader /> : null}
    {!showPreloader && (
    <>

      <NavBar/>
      <ScrollToTop />
      <div className='4xl:container 4xl:mx-auto'>  
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/article/:id" element={<ArticlePage />} /> 
          <Route path='/newsletter' element={<Newsletter/>}/>
        </Routes>
        <Footer/> 
      </div>

    </>
    )}
    </>
  )
}

export default App
