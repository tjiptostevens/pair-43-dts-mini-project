import React from 'react'
import leftArrow from '../../assets/img/icon/chevron-left.svg'
import rightArrow from '../../assets/img/icon/chevron-right.svg'

const Arrow = ({ direction, handleClick }) => {
  return (
    <>
      <div
        className={
          direction === 'right'
            ? 'center arrow arrow-right'
            : 'center arrow arrow-left'
        }
        onClick={handleClick}
      >
        {direction === 'right' ? (
          <img src={rightArrow} alt={direction} />
        ) : (
          <img src={leftArrow} alt={direction} />
        )}
      </div>
    </>
  )
}

export default Arrow
