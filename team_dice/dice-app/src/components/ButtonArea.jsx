import React from 'react'

const ButtonArea = ({onroll ,reset}) => {
    
  return (
    <div>
        <button className='btn'onClick={onroll}>던지기!</button>
        <button className='btn2'onClick={reset}>RESET</button>

    </div>
  )
}

export default ButtonArea