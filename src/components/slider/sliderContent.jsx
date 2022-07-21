import React from 'react'
import Slide from './slide'
const SliderContent = (props) => {
  return (
    <>
      <div
        style={{
          transform: `translateX(-${props.translate}px)`,
          transition: `tranform ease-out ${props.transition}s`,
          height: '100%',
          width: `${props.width}px`,
          display: 'flex',
        }}
      >
        {props.data.map((d, i) => (
          <Slide key={d.title + i} data={d} />
        ))}
      </div>
    </>
  )
}

export default SliderContent
