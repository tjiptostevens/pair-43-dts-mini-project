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
          <div className="row nav-link">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/series">Series</NavLink>

            <NavLink to="/movies">Movies</NavLink>

            <NavLink to="/new">New and Popular</NavLink>

            <NavLink to="/my-list">My List</NavLink>
          </div>
        </div>
        {true ? (
          <div className="row nav-link">
            <NavLink to="/login">Login</NavLink>
          </div>
        ) : (
          <div className="row nav-menu">
            <div>
              <i className="ic ic-spectacles"></i>
            </div>
            <div>Tjipto</div>
            <div>
              <i className="ic ic-gift"></i>
            </div>
            <div>
              <i className="ic ic-bell"></i>
            </div>

            <div className="row">
              <div>Foto</div>
              <div>
                <i className="ic ic-caret-down"></i>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
