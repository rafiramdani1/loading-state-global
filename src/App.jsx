import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UploadImage from './components/UploadImage'
import Navbar from './components/Navbar'
import LoadingProvider from './components/LoadingContext'

function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/upload' element={<UploadImage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingProvider>

  )
}

export default App
