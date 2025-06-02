import React from 'react'

const Board = ({player, imgPath, score}) => {

    return (
        <div className='board'>
            <h4>{player}</h4>
            <img src={imgPath} alt="dice" />
            <div>
                <p>점수</p>
                <p>{score}</p>
            </div>
        </div>
    )
}

export default Board