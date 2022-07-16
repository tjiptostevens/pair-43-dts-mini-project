import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/css/scrollbar.css'
import './index.css'
import './assets/css/icon.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Page404 from './site/page404'
import Login from './site/login'
import Whos from './site/whos'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/whos" element={<Whos />} />
        <Route element={<Page404 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
