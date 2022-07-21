import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/css/login.css'
import { Avatar } from '../assets/img/img'
import { auth, loginemailPassword, registerEmailPassword } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Login = ({ loginOrRegister }) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true)
  const [user, isLoading, error] = useAuthState(auth);


  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginemailPassword(credential.email, credential.password)
  }
  const registerHandler = () => {
    registerEmailPassword(credential.email, credential.password);
  }

  const buttonLoginOrRegisterOnClickHandler = (event) => {
   
    if (loginOrRegister === "login") {
      loginHandler();
      // event.preventDefault()
    } else {
      registerHandler();
      // event.preventDefault()
    }
  }
  useEffect(
    () => {
      if(isLoading) {
        return ;
      }
      if(user){
        navigate('/')
      }
      if(error){
        console.log(error);
      }
    },
    [isLoading, user, navigate]
  )
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
        <div className="col center login-right ">
          <form className="col" >
          <input className="form-input" type="email" value={credential.email} onChange={textFieldEmailOnChangeHandler} placeholder="EMAIL" />
            <input type="password" placeholder='PASSWORD' className='form-input' onChange={textFieldPasswordOnChangeHandler} value={credential.password}/>
            <button className="btn btn-login" onClick={buttonLoginOrRegisterOnClickHandler}>{toggle ? "LOGIN" : "SIGN UP"}</button>

            <div className="col center" style={{ fontSize: '12px' }}>
              {toggle ? "Don't " : 'Already '}have an Account
              <div className="btn-signup" onClick={() => setToggle(!toggle)}>
                {toggle ? 'SIGN UP' : 'LOGIN'}
              </div>
            </div>
            {/* <button className="btn btn-login" onClick={buttonLoginOrRegisterOnClickHandler}>
            {loginOrRegister === "login" ? "LOGIN" : "SIGN UP"}
            </button>
            <div className="col center" style={{ fontSize: '12px' }}>{loginOrRegister === "login" ? "Don't " : 'Already '}have an Account
            {loginOrRegister === "login" ? (
          <Link to="/register">
            <span variant="body1">SIGN UP</span>
          </Link>
        ) : (
          <Link to="/login">
            <span variant="body1">LOGIN</span>
          </Link>
        )}
            </div> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default Login