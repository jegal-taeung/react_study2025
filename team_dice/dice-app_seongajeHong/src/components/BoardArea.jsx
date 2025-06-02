import React from 'react'
import Board from './Board'

const BoardArea = ({userDiceImg, comDiceImg, userScore, comScore}) => {
    return (
        <div id="contents">
            <Board
                player={"나"}
                imgPath={userDiceImg}
                score={userScore}
            />
            <Board
                player={"COM"}
                imgPath={comDiceImg}
                score={comScore}
            />
        </div>
    )
}

export default BoardArea