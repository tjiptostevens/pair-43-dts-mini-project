import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './site/navbar'
import Footer from './site/footer'
import Home from './site/home'
import Login from './site/login'
import Page404 from './site/page404'

function App() {
  // cek apakah sudah login ?
  if (false) {
    return <Login />
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
