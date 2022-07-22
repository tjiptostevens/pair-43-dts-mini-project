import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/login.css'
import { Avatar } from '../assets/img/img'
import {
  auth,
  forgotPassword,
  loginemailPassword,
  registerEmailPassword,
} from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Login = ({ loginOrRegister }) => {
  const navigate = useNavigate()
  const [avatarIndex] = useState(Math.floor(Math.random() * Avatar.length))
  const [user, isLoading, error] = useAuthState(auth)

  const [credential, setCredential] = useState({
    email: '',
    password: '',
  })

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    })
  }

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    })
  }
  const forgotHandler = async () => {
    let res = await forgotPassword(credential.email)
    if (res !== undefined) {
      alert('Password has been reset. Please check your email.')
    }
  }
  const loginHandler = async () => {
    let res = await loginemailPassword(credential.email, credential.password)
    navigate('whos')
    if (res !== undefined) {
      alert(res)
    }
  }
  const registerHandler = async () => {
    let res = await registerEmailPassword(credential.email, credential.password)
    navigate('/login')
    if (res !== undefined) {
      alert(res)
    }
  }

  const buttonLoginOrRegisterOnClickHandler = async (event) => {
    event.preventDefault()
    if (loginOrRegister === 'login') {
      await loginHandler()
    } else {
      await registerHandler()
    }
  }
  useEffect(() => {
    if (isLoading) {
      return
    }
    if (user) {
      navigate('/whos')
    }
    if (error) {
      console.log(error)
    }
  }, [isLoading, user, navigate, error])
  return (
    <>
      {console.log(user)}
      <div
        className="login-page row center"
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%), url(${Avatar[avatarIndex]}) no-repeat 0% 0% / contain`,
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
        <div className="col center login-right ">
          <form className="col">
            <input
              className="form-input"
              type="email"
              onChange={textFieldEmailOnChangeHandler}
              value={credential.email}
              placeholder="EMAIL"
              style={{ color: 'grey' }}
            />
            <input
              type="password"
              className="form-input"
              onChange={textFieldPasswordOnChangeHandler}
              value={credential.password}
              placeholder="PASSWORD"
              style={{ color: 'grey' }}
            />
            <div
              onClick={forgotHandler}
              style={{
                fontSize: '10px',
                cursor: 'pointer',
                textAlign: 'right',
              }}
            >
              forgot password
            </div>
            <button
              className="btn btn-login"
              onClick={buttonLoginOrRegisterOnClickHandler}
            >
              {loginOrRegister === 'login' ? 'LOGIN' : 'SIGN UP'}
            </button>
            <div className="col center" style={{ fontSize: '12px' }}>
              {loginOrRegister === 'login' ? "Don't " : 'Already '}have an
              Account
              <div
                className="btn-signup"
                onClick={() => {
                  loginOrRegister === 'login'
                    ? navigate('/register')
                    : navigate('/login')
                }}
              >
                {loginOrRegister === 'login' ? 'SIGN UP' : 'LOGIN'}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
