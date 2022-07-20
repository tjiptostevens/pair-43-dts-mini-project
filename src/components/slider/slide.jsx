import React, { useState } from 'react'

const Slide = (props) => {
  const [video, setVideo] = useState(false)
  const handleClick = (mouse) => {
    setVideo(mouse)
  }
  return (
    <>
      <div
        style={{
          height: '100%',
          width: '100%',
          background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%),url(${props.data.image}) no-repeat 100% 0% / contain`,
        }}
        onClick={() => handleClick(true)}
        onMouseLeave={() => handleClick(false)}
      >
        {video ? (
          <iframe
            style={{ width: '100%', height: 'inherit' }}
            src={`https://www.youtube.com/embed/${props.data.video}`}
            title={props.data.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="col" style={{ width: '50%', padding: '100px' }}>
            <h1>{props.data.title}</h1>
            <p style={{ margin: '0 0 25px 0' }}>
              <small>{props.data.tag}</small>
            </p>
            <p style={{ textAlign: 'justify' }}>{props.data.description}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Slide
