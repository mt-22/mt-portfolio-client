import React from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import Resume from './pages/Resume'
import UnderConstruction from './pages/UnderConstruction'

const Router = () => {
    return (
      <>
      {/* <Header/> */}
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/resume' element={<Resume/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/projects' element={<UnderConstruction/>}/>
              <Route path='/blog' element={<UnderConstruction/>}/>
          </Routes>
      </BrowserRouter>
      </>
    )
  }
  
  export default Router