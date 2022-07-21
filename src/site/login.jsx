import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/login.css'
import { Avatar } from '../assets/img/img'
import {
  auth,
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

  const loginHandler = async () => {
    await loginemailPassword(credential.email, credential.password)
  }
  const registerHandler = async () => {
    await registerEmailPassword(credential.email, credential.password)
  }

  const buttonLoginOrRegisterOnClickHandler = async (event) => {
    if (loginOrRegister === 'login') {
      await loginHandler()
      navigate('/whos')
      // event.preventDefault()
    } else {
      await registerHandler()
      navigate('/login')
      // event.preventDefault()
    }
  }
  useEffect(() => {
    if (isLoading) {
      return
    }
    if (user) {
      navigate('/')
    }
    if (error) {
      console.log(error)
    }
  }, [isLoading, user, navigate, error])
  return (
    <>
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
