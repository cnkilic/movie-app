import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import HomePage from './pages/HomePage/HomePage'

import './App.css'
import ReduxProvider from './redux/ReduxProvider'

function App() {
  const router =
    <BrowserRouter>
      <Routes>
        < Route path='/' element={< HomePage />} />
        < Route path='/detail/:imdbId' element={< MovieDetailsPage />} />
        < Route path="*" element={< NotFoundPage />} />
      </Routes>
    </BrowserRouter>


  return (
    <React.StrictMode>
      <ReduxProvider>
        {router}
      </ReduxProvider>
    </React.StrictMode>
  )
}

export default App
