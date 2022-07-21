import React from 'react'
import Slide from './slide'

import useFetch from '../../custom/useFetch'
const SliderContent = (props) => {
  const { data: genre } = useFetch('genre/movie/list')
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
          <Slide
            key={'slide' + d.id + d.title}
            data={d}
            genre={genre && genre.genres}
          />
        ))}
      </div>
    </>
  )
}

export default SliderContent
