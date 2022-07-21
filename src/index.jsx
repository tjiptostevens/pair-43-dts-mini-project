import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/css/scrollbar.css'
import './index.css'
import './assets/css/icon.css'
import './assets/css/mobile.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// import Page404 from './site/page404'
// import Login from './site/login'
import Register_app from './containers/Register_app'
import Login_app from './containers/Login_app'
// import Login from './site/login'
import Whos from './site/whos'
// import boot

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/*" element={<App />} />
        <Route path="/login" element={<Login_app />} />
        <Route path="/register" element={<Register_app />} />
        <Route path="/whos" element={<Whos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
