import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/whos.css'
import { Avatar, Image } from '../assets/img/img'
const Whos = () => {
  return (
    <>
      <div className="whos-logo">
        <Link to="/">
          <i
            className="ic-chevron-left"
            style={{ textShadow: '2px 2px 2px #000000' }}
          ></i>
        </Link>
      </div>
      <div className="col center whos-page">
        <h1>Who's watching?</h1>
        <div className="row center">
          <div className="col center">
            <div
              className="profile"
              style={{
                background: `url(${
                  Avatar[Math.floor(Math.random() * Avatar.length)]
                }) no-repeat center center / cover`,
              }}
            ></div>
            <p>U-ONE</p>
          </div>
          <div className="col center">
            <div
              className="profile"
              style={{
                background: `url(${
                  Avatar[Math.floor(Math.random() * Avatar.length)]
                }) no-repeat center center / cover`,
              }}
            ></div>
            <p>U-TWO</p>
          </div>
          <div className="col center">
            <div
              className="profile"
              style={{
                background: `url(${
                  Avatar[Math.floor(Math.random() * Avatar.length)]
                }) no-repeat center center / cover`,
              }}
            ></div>
            <p>U-THREE</p>
          </div>
          <div className="col center">
            <div
              className="profile"
              style={{
                background: `url(${
                  Avatar[Math.floor(Math.random() * Avatar.length)]
                }) no-repeat center center / cover`,
              }}
            ></div>
            <p>U-FOUR</p>
          </div>
          <div className="col center">
            <div
              className="profile"
              style={{
                background: `url(${Image.murat}) no-repeat center center`,
              }}
            ></div>
            <p>OTHER</p>
          </div>
        </div>
        <button className="btn btn-profile">MANAGE PROFILE</button>
      </div>
    </>
  )
}

export default Whos
