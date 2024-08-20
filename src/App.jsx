import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './utils'
import { AboutUs, Contact, Home } from './pages'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<AboutUs />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false}/>
    </BrowserRouter>
  )
}

export default App