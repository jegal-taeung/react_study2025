import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'

/* 
사용자 "던지기" 버튼을 눌렀을 때, 랜덤으로 숫자가 생성된다. (1~6)
생성된 숫자로 주사위 눈 이미지를 화면에 출력한다.
사용자 와 컴퓨터의 주사위 눈을 비교한다 
사용자가 이겼을경우:  사용자 스코어 +1
컴퓨터가 이겼을경우: 사용자 스코어 +1  

초기화 버튼을 눌렀을때  스코어와 주사위눈이 초기 설정값으로 바뀐다 
*/ 
// 사용자 유저



const DiceGame = () => {
  const imgPath = 'src/assets/img/img/dice'

  // 사용자 유저
  const[userScore,setUserScore]= useState(0);
  const[userDiceImg,setUserDiceImg]=useState(`${imgPath}1.png`);
  
  // 컴퓨터 봇
  const[comScore,setComScore]= useState(0);
  const[comDiceImg,setComDiceImg]=useState(`${imgPath}1.png`);
  
  const throwDice =()=>{
    //alert("던지기 실행");

    // 주사위 눈생성 
    let userIndex = parseInt(Math.random()*6)+1;
    let comIndex = parseInt(Math.random()*6)+1;

    // 주사위눈 이미지 초기화
    setUserDiceImg(`${imgPath}${userIndex}.png`)
    setComDiceImg(`${imgPath}${comIndex}.png`)
    
    if(userIndex > comIndex){
        setUserScore(userScore+1);
    } else{
        setComScore(comScore+1);     
    }
  }


    const initDice =()=>{
    alert("초기화 실행");
    
  }




  return (
    <div className='dice-container'>
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice} />
        <BoardArea userDiceImg={userDiceImg}
                   comDiceImg={comDiceImg}
                   userScore={userScore} 
                   comScore={comScore} 
                       />
    </div>
  )
}

export default DiceGame