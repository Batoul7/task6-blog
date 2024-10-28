import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HomePage from './Pages/HomePage'
import ArticlePage from './Pages/ArticlePage'
import Newsletter from './Pages/Newsletter'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/article/:id" element={<ArticlePage />} /> 
      <Route path='/newsletter' element={<Newsletter/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
