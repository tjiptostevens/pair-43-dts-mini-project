import React from 'react'
const Slide = ({ content }) => {
  return (
    <>
      <div
        style={{
          height: '100%',
          width: '100%',
          background: `url('${content}') no-repeat center center / cover`,
        }}
      ></div>
    </>
  )
}

export default Slide
