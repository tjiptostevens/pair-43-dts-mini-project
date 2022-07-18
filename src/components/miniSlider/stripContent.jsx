import React from 'react'
import Strip from './strip'

const StripContent = (props) => {
  return (
    <>
      {console.log(props)}
      <div
        style={{
          transform: `translateX(-${props.translate}px)`,
          transition: `tranform ease-out ${props.transition}s`,
          width: `${props.width}px`,
          display: 'flex',
        }}
      >
        <Strip data={props.data} height={props.height} />
      </div>
    </>
  )
}

export default StripContent
