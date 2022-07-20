import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/login.css'
import { Avatar } from '../assets/img/img'

const Page404 = () => {
  return (
    <>
      <div
        className="row center"
        style={{
          width: '100%',
          height: '100vh',
          background: `linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%), url(${
            Avatar[Math.floor(Math.random() * Avatar.length)]
          }) no-repeat 0% 0% / cover`,
          position: 'absolute',
          top: 0,
        }}
      >
        <div className="row center ">
          <div style={{ position: 'absolute', top: '50px', left: '50px' }}>
            <Link to="/">
              <i
                className="ic-chevron-left"
                style={{ textShadow: '2px 2px 2px #000000' }}
              ></i>
            </Link>
          </div>
          <div
            className="col center"
            style={{
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '15px',
              padding: '50px',
            }}
          >
            <h1>Congratulation!</h1>
            <h2>you found our 404 page.</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page404
