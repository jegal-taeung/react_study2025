import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'

const DiceGame = () => {
  /*
    주사위 눈이 화면에 출력
    
    사용자와 컴퓨터의 주사위 눈을 비교

    초기화 버튼을 눌렀을 때, 스코어와 주사위 눈이 초기설정값으로 바뀐다





  */
   
    // const [user,setUser] = useState()
    // const [win,setWin] = useState(0);
    // const [lose,setLose] = useState(0);
    // const [mysc,setMysc] = useState(0);
    // const [opsc,setOpsc] = useState(0);

    // // 주사위 던지기 기능
    // const rollDice = () => {
    //     const myroll = parseInt(Math.random()*6) + 1;
    //     const oproll = parseInt(Math.random()*6) + 1;
    //     setMysc(myroll);
    //     setOpsc(oproll);
    //     if (myroll>oproll) {
    //       setWin(prev => prev + 1);
    //     }else if (myroll===oproll) {

    //     }else {
    //       setLose(prev => prev +1);
    //     }
    // }

    // const reset = () => {
    //   setMysc(0);
    //   setOpsc(0);
    //   setLose(0);
    //   setWin(0);
    // }

    const[user,setUser] = useState({abc,abc2,abc3});
    // ...(전개연산자)
    setUser({...user,
      abc : 123,
      abc2 : 1234
    })
    // ==> 객체 useState

  return (
    <div>
        <h1>주사위 게임</h1>
        <ButtonArea onroll={rollDice} reset = {reset} user={setUser({...user, abc:1, abc2:4})}/> // 객체로 props 전달 가능
        <BoardArea myscore={mysc} opscore={opsc} win={win} setWin={setWin} setLose={setLose} lose={lose}/>
    </div>
  )
}

export default DiceGame