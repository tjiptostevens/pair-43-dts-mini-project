import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './site/navbar'
import Footer from './site/footer'
import Home from './site/home'
import Login from './site/login'
import Page404 from './site/page404'

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
        return <Login />
      }
      if(error)
      {
       alert (error)
      }
    }, [user, loading, error]
  )
  // if (false) {
  //   return <Login />
  // }
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
