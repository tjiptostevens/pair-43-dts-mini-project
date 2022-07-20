import React from 'react'
import '../assets/css/navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.svg'
import { Avatar } from '../assets/img/img'

const Navbar = () => {
  return (
    <>
      <div className="row navbar">
        <div className="row">
          <div
            className="nav-logo"
            style={{
              background: `url(.${logo}) center center / cover`,
            }}
          ></div>
          {/* Jika sudah login true */}
          {true ? (
            <div className="row nav-link">
              <NavLink
                className={({ isActive }) => (isActive ? 'a-active' : '')}
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? 'a-active' : '')}
                to="/series"
              >
                Series
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? 'a-active' : '')}
                to="/movies"
              >
                Movies
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? 'a-active' : '')}
                to="/new"
              >
                New and Popular
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? 'a-active' : '')}
                to="/my-list"
              >
                My List
              </NavLink>
            </div>
          ) : (
            ''
          )}
        </div>
        {true ? (
          <>
            <div className="row center nav-menu">
              <div>
                <i className="ic ic-spectacles"></i>
              </div>
              <div>[USER ID]</div>
              <div>
                <i className="ic ic-gift"></i>
              </div>
              <div>
                <i className="ic ic-bell"></i>
              </div>

              <div className="row center">
                <div
                  className="nav-profile"
                  style={{
                    background: `url(${
                      Avatar[Math.floor(Math.random() * Avatar.length)]
                    }) no-repeat center center / cover`,
                  }}
                ></div>
                <div>
                  <i className="ic ic-caret-down"></i>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="row nav-link">
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
      </div>
      <div style={{ position: 'relative', bottom: '30px' }}>LOGOUT</div>
    </>
  )
}

export default Navbar
