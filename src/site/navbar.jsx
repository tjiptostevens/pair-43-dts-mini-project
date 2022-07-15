import React from 'react'
import '../assets/css/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <div className="logo"></div>
          <div>
            <ul>
              <li>Home</li>
              <li>Series</li>
              <li>Movies</li>
              <li>New and Popular</li>
              <li>My List</li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Navbar
