import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/login.css'
import { Avatar } from '../assets/img/img'

const Login = () => {
  let navigate = useNavigate()
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div
        className="login-page row center"
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%), url(${
            Avatar[Math.floor(Math.random() * Avatar.length)]
          }) no-repeat 0% 0% / contain`,
        }}
      >
        <div className="login-left row center">
          <Link to="/">
            <i
              className="ic-chevron-left"
              style={{ textShadow: '2px 2px 2px #000000' }}
            ></i>
          </Link>
        </div>
        <div className="login-right col center">
          <form className="col">
            <input className="form-input" type="email" placeholder="EMAIL" />
            <input
              className="form-input"
              type="password"
              placeholder="PASSWORD"
            />
            <button
              className="btn btn-login"
              onClick={(e) => {
                e.preventDefault()
                navigate('/whos')
              }}
            >
              {toggle ? 'LOGIN' : 'SIGN UP'}
            </button>
            <div className="col center" style={{ fontSize: '12px' }}>
              {toggle ? "Don't " : 'Already '}have an Account
              <div className="btn-signup" onClick={() => setToggle(!toggle)}>
                {toggle ? 'SIGN UP' : 'LOGIN'}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
