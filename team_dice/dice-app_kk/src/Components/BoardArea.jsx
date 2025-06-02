import React from 'react'
import Board from './Board'

const BoardArea = ({user,com}) => {

  return (
    <div className='board-area' >
        <Board name={"나나"} info={user}/>
        <Board name={"컴퓨터터"} info={com}/>
    </div>
  )
}

export default BoardArea