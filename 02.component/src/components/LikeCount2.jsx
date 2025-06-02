import React, { useState } from 'react'

const LikeCount2 = () => {
    const [num,setNum] = useState(0);
    const good = () =>{
        setNum(num+1);
    }
    const bad = () => {
        if(num>0)
        setNum(num-1);
    }
  return (
    <div className='like'>
        <img src="/src/assets/img/123.jpg" 
        alt="123"
        style={{width:300, height:300}} />
        <h2>좋아요{num}</h2>
        {/* onClick 속성에 함수 실행문을 넣을 때 {() => 함수명} 형태로 정의해야한다 */}
        {/* <button onClick={good} style={{width:50 ,height:50}}>🧡</button> */}
        <button onClick={() => setNum(num+1)} style={{width:50 ,height:50}}>🧡</button>
        <button onClick={bad} style={{width:50 ,height:50}}>💔</button>
    </div>
  )
}

export default LikeCount2