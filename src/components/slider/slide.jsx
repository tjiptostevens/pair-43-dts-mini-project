import React, { useState } from 'react'
import useFetch from '../../custom/useFetch'

const Slide = (props) => {
  const [video, setVideo] = useState(false)
  const { data: movieUrl } = useFetch(
    `movie/${props.data && props.data.id}/videos`,
  )
  const handleClick = (mouse) => {
    setVideo(mouse)
  }

  return (
    <div
      key={'slide' + props.data.title}
      style={{
        height: '100%',
        width: '100%',
        background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%),url(https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}) no-repeat 100% 0% / contain`,
      }}
      onClick={() => handleClick(true)}
      onMouseLeave={() => handleClick(false)}
    >
      {video ? (
        movieUrl &&
        movieUrl.results
          .filter((f) => f.name === 'Official Trailer')
          .map((g) => (
            <iframe
              key={g.key}
              style={{ width: '100%', height: 'inherit' }}
              src={`https://www.youtube.com/embed/${g.key}`}
              title={props.data.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))
      ) : (
        <div className="col" style={{ width: '50%', padding: '100px' }}>
          <h1>{props.data.title}</h1>
          <p style={{ margin: '0 0 25px 0' }}>
            {props.data.genre_ids.map((d, i) => (
              <small key={'genre' + props.data.title + i}>
                {props.genre &&
                  props.genre
                    .filter((f) => f.id === d)
                    .map((g) => (i === 0 ? g.name : <> &bull; {g.name}</>))}
              </small>
            ))}
          </p>
          {video ? <button>PLAY VIDEO</button> : ''}
          <p style={{ textAlign: 'justify' }}>{props.data.overview}</p>
        </div>
      )}
    </div>
  )
}

export default Slide
