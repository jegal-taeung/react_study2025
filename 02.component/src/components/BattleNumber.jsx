import React, { useState } from 'react';

// 실습)숫자 맞추기
// 1. 버튼을 클릭했을 때, 랜덤한 숫자 생성하기 (1~3)
// 2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
//    - 정답인 경우 -> "정답입니다~!"
//    - 틀린 경우 -> "땡~!"
// 누른 버튼의 값 가져오는 방법 -> event객체.target
const BattleNumber = () => {
    
    const [message, setMessage] = useState("");  // 결과 메시지

  // 버튼 클릭 시 실행되는 함수
  const handleClick = (event) => {
    const userChoice = parseInt(event.target.value);  // 클릭한 버튼의 숫자
    const randomNum = parseInt(Math.random() * 3) + 1;  // 1~3 랜덤 숫자

    if (userChoice === randomNum) {
      setMessage(`정답입니다. 유저선택 : ${userChoice} 랜덤선택 : ${randomNum} `);
    } else {
      setMessage(`땡~! 유저선택 : ${userChoice}랜덤선택 : ${randomNum}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      
      <div>
        
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
      </div>
      <h3>{message}</h3>
    </div>
  );
}

export default BattleNumber