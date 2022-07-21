import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/whos.css'
import WhosProfile from './whosProfile'
import { Image } from '../assets/img/img'

let profiles = [
  { icon: '0', name: 'ALDI' },
  { icon: '1', name: 'Steven' },
  { icon: '2', name: 'Freddy' },
  { icon: '3', name: 'Angel' },
]

const Whos = () => {
  const [profile, setProfile] = useState(profiles)
  const [toggle, setToggle] = useState(false)
  const handleDelete = (e) => {
    let x = [...profile]
    x.splice(e, 1)
    setProfile([...x])
  }
  const handleAdd = (e) => {
    let x = prompt('Input user name here.')
    let y = parseFloat(prompt('Pilih avatar ketik angka 0 - 11'))
    if (x === '' || x === null) {
      x = 'USER'
      console.log(x, y)
      if (isNaN(y)) {
        y = `${Math.floor(Math.random() * 11)}`
        console.log(x, y)
        let z = [...profile, { icon: y, name: x }]
        setProfile(z)
      } else {
        let z = [...profile, { icon: y, name: x }]
        setProfile(z)
      }
    } else if (isNaN(y)) {
      y = `${Math.floor(Math.random() * 11)}`
      console.log(x, y)
      let z = [...profile, { icon: y, name: x }]
      setProfile(z)
    } else {
      console.log(x, y)
      let z = [...profile, { icon: y, name: x }]
      setProfile(z)
    }
  }
  return (
    <>
      <div className="whos-logo">
        <Link to="/">
          <img src={Image.logo} alt="logo" width="50" />
        </Link>
      </div>
      <div className="col center whos-page">
        <h1>Who's watching?</h1>
        <div className="row center" style={{ flexWrap: 'wrap' }}>
          <WhosProfile
            data={profile}
            handleDelete={handleDelete}
            toggle={toggle}
          />
          {toggle ? (
            <div className="col center profile-container" onClick={handleAdd}>
              <div
                className="profile"
                style={{
                  background: `url(${Image.murat}) no-repeat center center`,
                }}
              ></div>
              <p>ADD</p>
            </div>
          ) : (
            ''
          )}
        </div>
        <button className="btn btn-profile" onClick={() => setToggle(!toggle)}>
          {toggle ? 'FINISH' : 'MANAGE PROFILE'}
        </button>
      </div>
      <div></div>
    </>
  )
}

export default Whos
