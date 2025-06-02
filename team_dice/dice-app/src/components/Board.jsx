import React from 'react'

const Board = ({label,score}) => {
  const diceImages = [
    'src/assets/dice1.png', 
    'src/assets/dice1.png',
    'src/assets/dice2.png',
    'src/assets/dice3.png',
    'src/assets/dice4.png',
    'src/assets/dice5.png',
    'src/assets/dice6.png',
  ];
  

  return (
    <div className='board-area'>
        <h4>{label}</h4>
        <div className='dice'>
        <img src={diceImages[score]} alt=""/>
        </div>
        <div>
            <p>현재 점수는?</p>
            <p>{score}</p>
        </div>
    </div>
  )
}

export default Board