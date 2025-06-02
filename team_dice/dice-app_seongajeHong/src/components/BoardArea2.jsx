import React from 'react'
import Board2 from './Board2'

const BoardArea2 = ({user, com}) => {
    return (
        <div id="contents">
            <Board2
                player={"나"}
                data={user}
            />
            <Board2
                player={"COM"}
                data={com}
            />
        </div>
    )
}

export default BoardArea2