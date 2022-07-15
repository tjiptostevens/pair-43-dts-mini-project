import React from 'react'
import '../assets/css/navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.svg'

const Navbar = () => {
  return (
    <>
      <div className="row navbar">
        <div className="row">
          <div
            className="logo"
            style={{
              background: `url(${logo}) center center / cover`,
              width: '50px',
            }}
          ></div>
          <div className="nav-link">
            <ul className="row">
              <li>Home</li>
              <li>Series</li>
              <li>Movies</li>
              <li>New and Popular</li>
              <li>My List</li>
            </ul>
          </div>
        </div>
        <div className="row nav-menu">
          <div>S</div>
          <div>Tjipto</div>
          <div>G</div>
          <div>N</div>
          <div className="row">
            <div>Foto</div>
            <div>A</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
