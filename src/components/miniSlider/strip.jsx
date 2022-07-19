import React from 'react'

const Strip = (props) => {
  return (
    <>
      {props.data.map((d, i) => (
        <div
          key={i}
          style={{
            minHeight: props.height === undefined ? '200px' : props.height,
            width: '150px',
            borderRadius: '5px',
            marginRight: '15px',
            background: `url(${d.image}) no-repeat center center / cover`,
          }}
        ></div>
      ))}
    </>
  )
}

export default Strip
