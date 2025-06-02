import React, { useEffect, useState } from 'react';
import Board from './Board'

const BoardArea = ({myscore,opscore ,win, lose}) => {
let result;

  
    if (myscore === null || opscore === null) return;

    if (myscore > opscore) {
      result='승리';
      // setWin(prev => prev + 1);
    } else if (myscore === opscore) {
      result='무승부';
    } else {
      result='패배';
      // setLose(prev => prev + 1);
    }
  
  return (
    <>
    <div className='abc'>
        <Board label="나" score={myscore}/>
        <Board label="상대방" score={opscore}/>
        
        
    </div>
    <h1>{result}</h1>
    <h1>승 : {win}  패 : {lose}</h1>
    
    </>
  )
}

export default BoardArea