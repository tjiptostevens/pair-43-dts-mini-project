import React, { useState } from 'react'
import '../assets/css/navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Avatar, Image } from '../assets/img/img'
import { auth, logout } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Navbar = () => {
  const [avatarIndex] = useState(Math.floor(Math.random() * Avatar.length))
  const [dropdown, setDropdown] = useState(false)
  const [login, setLogin] = useState(true)
  const navigate = useNavigate()
  const buttonLogoutOnClickHandler = async () => {
    await logout()
    navigate('/login')
  }
  const [user] = useAuthState(auth)
  return (
    <>
      {/* {console.log(user)} */}
      <div className="row navbar">
        <div className="row">
          <div
            className="nav-logo"
            style={{
              background: `url(${Image.logo}) center center / cover`,
            }}
          ></div>
          {/* Jika sudah login true */}
          {user ? (
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
        {user ? (
          <>
            <div className="row center nav-menu">
              <div>
                <i className="ic ic-spectacles"></i>
              </div>
              <div>
                {user ? user.email.split('@')[0].toUpperCase() : '[USER ID]'}
              </div>
              <div>
                <i className="ic ic-gift"></i>
              </div>
              <div>
                <i className="ic ic-bell"></i>
              </div>

              <div
                className="row center"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setDropdown(!dropdown)
                }}
              >
                <div
                  className="nav-profile"
                  style={{
                    background: `url(${Avatar[avatarIndex]}) no-repeat center center / cover`,
                  }}
                ></div>
                <div>
                  <i className="ic ic-caret-down"></i>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="row nav-link" onClick={() => setLogin(login)}>
            <NavLink to="/login">Login</NavLink>
          </div>
        )}
      </div>
      <div
        id="nav-dropdown"
        className="nav-dropdown"
        style={{ opacity: dropdown ? '1' : '0' }}
        onClick={buttonLogoutOnClickHandler}
      >
        LOGOUT
      </div>
    </>
  )
}

export default Navbar
