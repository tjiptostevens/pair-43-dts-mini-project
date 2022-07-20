import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './site/navbar'
import Footer from './site/footer'
import Home from './site/home'
import Login from './site/login'

function App() {
  // cek apakah sudah login ?
  if (true) {
    return <Login />
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
