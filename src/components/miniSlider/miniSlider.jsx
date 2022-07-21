import React, { useState } from 'react'
import useWindow from '../../custom/useWindow'
import Arrow from '../slider/arrow'
import StripContent from './stripContent'

const MiniSlider = (props) => {
  const { width: getWidth } = useWindow()
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.5,
    slide: { width: props.height ? (props.height / 4) * 3 : 150, height: 200 },
  })
  // Arrow Button
  const nextSlide = () => {
    if (state.activeIndex === props.data.length - 1) {
      return setState({ ...state, translate: 0, activeIndex: 0 })
    }
    setState({
      ...state,
      activeIndex: state.activeIndex + 1,
      translate: state.activeIndex * state.slide.width,
    })
  }
  const prevSlide = () => {
    if (state.activeIndex === props.data.length - 1) {
      return setState({
        ...state,
        translate: (props.data.length - 1) * state.slide.width,
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
          : (state.activeIndex - 1) * state.slide.width,
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
          title={props.title}
          translate={state.translate}
          transition={state.transition}
          width={
            props.top10
              ? (state.slide.width + state.slide.height / 2) * props.data.length
              : state.slide.width * props.data.length
          }
          data={props.data}
          height={props.height}
          slide={state.slide}
          top10={props.top10}
        />
        {state.activeIndex === 0 ? (
          ''
        ) : (
          <Arrow direction="left" handleClick={prevSlide} />
        )}
        {props.top10 ? (
          getWidth - (state.slide.width + state.slide.height / 2) <
          (state.slide.width + state.slide.height / 2) * props.data.length -
            state.translate ? (
            <Arrow direction="right" handleClick={nextSlide} />
          ) : (
            ''
          )
        ) : getWidth - state.slide.width <
          state.slide.width * props.data.length - state.translate ? (
          <Arrow direction="right" handleClick={nextSlide} />
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export default MiniSlider
