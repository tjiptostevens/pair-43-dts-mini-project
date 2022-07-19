import React, { useState } from 'react'
import Arrow from '../slider/arrow'
import StripContent from './stripContent'

const MiniSlider = (props) => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.5,
    width: 300,
  })
  // Arrow Button
  const nextSlide = () => {
    if (state.activeIndex === props.data.length - 1) {
      return setState({ ...state, translate: 0, activeIndex: 0 })
    }
    setState({
      ...state,
      activeIndex: state.activeIndex + 1,
      translate: ((state.activeIndex + 1) * state.width) / 2,
    })
  }
  const prevSlide = () => {
    if (state.activeIndex === props.data.length - 1) {
      return setState({
        ...state,
        translate: ((props.data.length - 1) * state.width) / 2,
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
          : ((state.activeIndex - 1) * state.width) / 2,
    })
  }
  return (
    <>
      <div
        className="slider"
        style={{
          width: '95vw',
          margin: '25px auto',
        }}
      >
        <h3>{props.title}</h3>
        <StripContent
          translate={state.translate}
          transition={state.transition}
          width={state.width * props.data.length}
          data={props.data}
          height={props.height}
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

export default MiniSlider
