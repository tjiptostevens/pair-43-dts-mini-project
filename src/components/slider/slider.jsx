import React, { useState, useEffect } from 'react'
import Arrow from './arrow'
import SliderContent from './sliderContent'
import useWindow from '../../custom/useWindow'

const Slider = (props) => {
  const { width: getWidth } = useWindow()
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
      translate: (state.activeIndex + 1) * getWidth,
    })
  }
  const prevSlide = () => {
    if (state.activeIndex === props.data.length - 1) {
      return setState({
        ...state,
        translate: (props.data.length - 1) * getWidth,
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
          : (state.activeIndex - 1) * getWidth,
    })
  }

  const autoPlay = () => {
    setInterval(() => {
      nextSlide()
    }, props.autoPlay[1] * 1000)
  }

  return (
    <>
      <div
        className="slider"
        onMouseEnter={() => {
          setState({ ...state, autoPlay: false })
        }}
        onMouseLeave={() => {
          setState({ ...state, autoPlay: true })
        }}
      >
        <SliderContent
          translate={state.translate}
          transition={state.transition}
          width={getWidth * props.data.length}
          data={props.data}
        />
        {state.activeIndex === 0 ? (
          ''
        ) : (
          <Arrow direction="left" handleClick={prevSlide} />
        )}
        <Arrow direction="right" handleClick={nextSlide} />
      </div>
    </>
  )
}
Slider.defaultProps = {
  autoPlay: null,
}
export default Slider
