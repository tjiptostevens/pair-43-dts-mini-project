import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './site/navbar'
import Footer from './site/footer'
import Home from './site/home'

import { auth } from './config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


function App() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(
    () => {
      if(loading){
        return ;
      }
      if(!user){
        navigate('/login');
      }
      if(error)
      {
        console.log(error)
      }
    }, [user, loading, navigate]
  )
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
