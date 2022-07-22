import React from 'react'
import { iconNumber } from '../../assets/img/img.jsx'

const Strip = (props) => {
  return (
    <>
      <div></div>
      {props.data.map((d, i) => (
        <div className="row" key={d.id + 'strip' + Math.random() + props.title}>
          {props.top10 ? (
            <>
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
              <div
                key={d.id + 'strip' + Math.random() + props.title}
                className="strip"
                style={{
                  minHeight:
                    props.height === undefined
                      ? `${props.slide.height}px`
                      : `${props.height}px`,
                  minWidth: `${props.slide.width}px`,
                  borderRadius: '5px',
                  marginRight: '15px',
                  background: `url(https://image.tmdb.org/t/p/w500/${d.poster_path}) no-repeat center center / cover`,
                }}
              ></div>
            </>
          ) : (
            <div
              className="strip"
              style={{
                minHeight:
                  props.height === undefined
                    ? `${props.slide.height}px`
                    : `${props.height}px`,
                minWidth: `${props.slide.width}px`,
                borderRadius: '5px',
                marginRight: '15px',
                background: `url(https://image.tmdb.org/t/p/w500/${d.poster_path}) no-repeat center center / cover`,
              }}
            ></div>
          )}
        </div>
      ))}
    </>
  )
}

export default Strip
