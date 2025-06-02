import React, { useState } from 'react'
import ButtonArea from './ButtonArea'
import BoardArea2 from './BoardArea2'

/*
  1.사용자 "던지기" 버튼을 눌렀을 때, 랜덤으로 숫자가 생성된다. (1~6)

  2.생성된 숫자로 주사위 눈 이미지를 화면에 출력한다.

  3.사용자와 컴퓨터의 주사위 눈을 비교한다.
   - 사용자가 이겼을 경우: 사용자의 스코어 +1
   - 컴퓨터가 이겼을 경우: 컴퓨터의 스코어 +1

  4."초기화" 버튼을 눌렀을 때, 스코어와 주사위 눈이 초기설정값으로 바뀐다.
   - 주사위 눈 : 1
   - 스코어: 0
*/
const DiceGame2 = () => {

    const imgPath = './src/assets/img/dice'

    const [user, setUser] = useState({
        imgPath: `${imgPath}1.png`,
        score: 0
    })
    const [com, setCom] = useState({
        imgPath: `${imgPath}1.png`,
        score: 0
    })

    const throwDice = () => {
        let userIndex = Math.floor(Math.random()*6)+1
        let comIndex = Math.floor(Math.random()*6)+1
        let userScore = user.score
        let comScore = com.score
        
        if(userIndex>comIndex)
            userScore = user.score+1
        else if(comIndex>userIndex)
            comScore =  com.score+1

        setUser({
            ...user,
            imgPath:`${imgPath}${userIndex}.png`,
            score: userScore
        })
        setCom({
            ...com,
            imgPath:`${imgPath}${comIndex}.png`,
            score: comScore
        })
    }

    const resetDice = () => {
        setUserDiceImg(`${imgPath}1.png`)
        setComDiceImg(`${imgPath}1.png`)
        setUserScore(0)
        setComScore(0)
    }

    return (
        <div id="container">
            <h1>주사위 게임</h1>
            <ButtonArea throwDice={throwDice} resetDice={resetDice}/>
            <BoardArea2
                user={user}
                com={com}
            />
        </div>
    )
}

export default DiceGame2