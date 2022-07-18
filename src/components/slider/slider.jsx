import React, { useState, useEffect } from 'react'
import Arrow from './arrow'
import Slide from './slide'
import SliderContent from './sliderContent'

const Slider = (props) => {
  const getWidth = () => window.innerWidth
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.5,
  })

  const nextSlide = () => {
    if (state.activeIndex === props.slides.length - 1) {
      return setState({ ...state, translate: 0, activeIndex: 0 })
    }
    setState({
      ...state,
      activeIndex: state.activeIndex + 1,
      translate: (state.activeIndex + 1) * getWidth(),
    })
  }
  const prevSlide = () => {
    if (state.activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1,
      })
    }
    setState({
      ...state,
      activeIndex: state.activeIndex - 1,
      translate: (state.activeIndex - 1) * getWidth(),
    })
  }

  return (
    <>
      <div className="slider">
        <SliderContent
          translate={state.translate}
          transition={state.transition}
          width={getWidth() * props.slides.length}
        >
          {props.slides.map((slide, i) => (
            <Slide key={slide + i} content={slide} />
          ))}
        </SliderContent>
        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right" handleClick={nextSlide} />
      </div>
    </>
  )
}

export default Slider
