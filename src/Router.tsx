import React from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import BlogList from './pages/BlogList'
import BlogPostPage from './pages/BlogPostPage'
import './styles/global.css'

const Router = () => {
    return (
      <>
      {/* <Header/> */}
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/resume' element={<Resume/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/blog' element={<BlogList/>}/>
              <Route path='/blog/:slug' element={<BlogPostPage/>}/>
          </Routes>
      </BrowserRouter>
      </>
    )
  }
  
  export default Router