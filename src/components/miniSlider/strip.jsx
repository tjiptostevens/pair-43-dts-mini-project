import React from 'react'
import { iconNumber } from '../../assets/img/img.jsx'

const Strip = (props) => {
  return (
    <>
      {props.data.map((d, i) => (
        <>
          {props.top10 ? (
            <div
              key={'icon' + i}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                minWidth: `${props.slide.height / 2}px`,
                textAlign: 'right',
              }}
            >
              <img
                src={iconNumber[i]}
                height={`${props.slide.width}px`}
                alt={i}
              />
            </div>
          ) : (
            ''
          )}
          <div
            key={d.image + i}
            className="strip"
            style={{
              minHeight:
                props.height === undefined
                  ? `${props.slide.height}px`
                  : `${props.height}px`,
              minWidth: `${props.slide.width}px`,
              borderRadius: '5px',
              marginRight: '15px',
              background: `url(${d.image}) no-repeat center center / cover`,
            }}
          ></div>
        </>
      ))}
    </>
  )
}

export default Strip
