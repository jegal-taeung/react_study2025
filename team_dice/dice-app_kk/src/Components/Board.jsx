import React from 'react'

const Board = ({info,name} ) => {
  

  console.log(info);
  

  return (
    <div  >
        <h4>{name}</h4>
        <img src={info.imgPath} alt="" />
        <div>
            <p>현재재 점수는?</p>
            <p >{info.score}</p>
        </div>
    </div>
  )
}

export default Board