import React from 'react'

const ButtonArea = ({throwDice, resetDice}) => {
    return (
        <div className='btnClass'>
            <button className='btnThrow' onClick={()=>throwDice()}>던지기!</button>
            <button className='btnReset' onClick={()=>resetDice()}>RESET</button>
        </div>
    )
}

export default ButtonArea