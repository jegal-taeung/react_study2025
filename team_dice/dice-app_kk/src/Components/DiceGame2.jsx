import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea from './BoardArea'






const DiceGame = () => {
  
  const imgPath = 'src/assets/img/img/dice'



  
  const [user,setUser]=useState({imgPath:`${imgPath}1.png`,score:0})
  const [com,setCom]=useState({imgPath:`${imgPath}1.png`,score:0})


  const throwDice =()=>{
    //alert("던지기 실행");

    // 주사위 눈생성 
    let userIndex = parseInt(Math.random()*6)+1;
    let comIndex = parseInt(Math.random()*6)+1;



    
    // ... (전개연산자)
    // ex) let user={imgPaht:"~", score:0}
    

    let userScore =user.score;
      let comScore =com.score;

    

    if(userIndex > comIndex){
        userScore +=1;
    } else{
        comScore +=1;    
    }

    setUser({...user, score: userScore,imgPath:`${imgPath}${userIndex}.png`});
    setCom({...com, score: comScore ,imgPath: `${imgPath}${comIndex}.png`});

  }


    const initDice =()=>{
    alert("초기화 실행");
    
  }




  return (
    <div className='dice-container' >
        <h1>주사위 게임</h1>
        <ButtonArea throwDice={throwDice} initDice={initDice} />
        <BoardArea user={user}
                  com={com}
                       />
    </div>
  )
}

export default DiceGame