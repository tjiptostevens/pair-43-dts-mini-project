import React from 'react'

const Strip = (props) => {
  return (
    <>
      {props.data.map((d, i) => (
        <div
          key={i}
          style={{
            minHeight: props.height === undefined ? '150px' : props.height,
            width: '225px',
            marginRight: '15px',
            background: `url(${d.image}) no-repeat center center / cover`,
          }}
        ></div>
      ))}
    </>
  )
}

export default Strip
