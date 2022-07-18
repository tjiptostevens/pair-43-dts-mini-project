import React, { useState } from 'react'
import Arrow from './arrow'
import SliderContent from './sliderContent'

const getWidth = () => window.innerWidth

const Slider = (props) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.5,
  })
  // Arrow Button
  const nextSlide = () => {
    if (state.activeIndex === props.data.length - 1) {
      return setState({ ...state, translate: 0, activeIndex: 0 })
    }
    setState({
      ...state,
      activeIndex: state.activeIndex + 1,
      translate: (state.activeIndex + 1) * getWidth(),
    })
  }
  const prevSlide = () => {
    if (state.activeIndex === props.data.length - 1) {
      return setState({
        ...state,
        translate: (props.data.length - 1) * getWidth(),
        activeIndex: props.data.length - 1,
      })
    }
    setState({
      ...state,
      activeIndex:
        state.activeIndex === 0 ? state.activeIndex : state.activeIndex - 1,
      translate:
        state.activeIndex === 0
          ? state.activeIndex
          : (state.activeIndex - 1) * getWidth(),
    })
  }
  const autoPlay = () => {}
  return (
    <>
      <div className="slider">
        <SliderContent
          translate={state.translate}
          transition={state.transition}
          width={getWidth() * props.data.length}
          data={props.data}
        />
        <Arrow direction="left" handleClick={prevSlide} />
        <Arrow direction="right" handleClick={nextSlide} />
      </div>
    </>
  )
}
Slider.defaultProps = {
  slides: [],
  autoPlay: null,
}
export default Slider
