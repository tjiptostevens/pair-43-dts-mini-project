import React from 'react'
import '../assets/css/carousel.css'
import Slider from '../components/slider/slider'

const Carousel = (props) => {
  return (
    <>
      <div className="carousel">
        <Slider data={props.data} autoPlay={2} />
      </div>
    </>
  )
}

export default Carousel
