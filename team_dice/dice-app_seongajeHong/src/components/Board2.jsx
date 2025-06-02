import React from 'react'

const Board2 = ({player, data}) => {

    return (
        <div className='board'>
            <h4>{player}</h4>
            <img src={data.imgPath} alt="dice" />
            <div>
                <p>점수</p>
                <p>{data.score}</p>
            </div>
        </div>
    )
}

export default Board2