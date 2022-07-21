import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './site/navbar'
import Footer from './site/footer'
import Home from './site/home'
import Page404 from './site/page404'

import { auth } from './config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import LoginApp from './containers/LoginApp'

function App() {
  const [user, loading, error] = useAuthState(auth)
  useEffect(() => {
    if (loading) {
      return
    }
    if (!user) {
      return <LoginApp />
    }
    if (error) {
      alert(error)
    }
  }, [user, loading, error])

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
