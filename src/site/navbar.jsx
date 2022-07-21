import React from 'react'
import '../assets/css/navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.svg'
import { Avatar } from '../assets/img/img'
import { logout } from '../config/firebase'

const Navbar = () => {
  const navigate = useNavigate();
  const buttonLogoutOnClickHandler = async() => {
    await logout();
    navigate('/login');
  }
  return (
    <>
      <div className="row navbar">
        <div className="row">
          <div
            className="logo"
            style={{
              background: `url(.${logo}) center center / cover`,
              width: '50px',
            }}
          ></div>
          {/* Jika sudah login true */}
          {true ? (
            <div className="row nav-link">
              <button onClick={buttonLogoutOnClickHandler}>Logout</button>
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
          <div className="row center nav-menu">
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
        ) : (
          <div className="row nav-link">
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
