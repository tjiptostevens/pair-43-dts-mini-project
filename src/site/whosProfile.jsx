import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../assets/img/img'
const WhosProfile = (props) => {
  const { data, toggle } = props
  const handleDelete = (e, i) => {
    e.preventDefault()
    props.handleDelete(i)
  }
  return (
    <>
      {data &&
        data.map((d, i) => (
          <div key={'x' + i}>
            {toggle ? (
              <div
                className="col center btn-x"
                onClick={(e) => handleDelete(e, i)}
              >
                X
              </div>
            ) : (
              ''
            )}
            {toggle ? (
              <ProfileImage d={d} />
            ) : (
              <Link to="/" style={{ color: 'white' }}>
                <ProfileImage d={d} />
              </Link>
            )}
          </div>
        ))}
    </>
  )
}
const ProfileImage = (props) => {
  const { d } = props
  return (
    <div className="col center profile-container">
      <div
        className="profile"
        style={{
          background: `url(${Avatar[d.icon]}) no-repeat center center / cover`,
        }}
      ></div>
      <p>{d.name.toUpperCase()}</p>
    </div>
  )
}

export default WhosProfile
