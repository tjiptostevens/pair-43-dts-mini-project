import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/login.css'
import { Avatar } from '../assets/img/avatar'

const Login = () => {
  return (
    <>
      <div
        className="row center login-page"
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%), url(${
            Avatar[Math.floor(Math.random() * Avatar.length)]
          }) no-repeat 0% 0% / contain`,
        }}
      >
        <div className="row center login-left ">
          <Link to="/">
            <i
              className="ic-chevron-left"
              style={{ textShadow: '2px 2px 2px #000000' }}
            ></i>
          </Link>
        </div>
        <div className="col center login-right ">
          <form className="col">
            <input className="form-input" type="email" placeholder="EMAIL" />
            <input
              className="form-input"
              type="password"
              placeholder="PASSWORD"
            />
            <button className="btn">L O G I N</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
