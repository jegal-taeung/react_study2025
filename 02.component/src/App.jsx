
import { useState } from 'react'
import './App.css'
import Menubox from './components/Menubox'
import MemberInfo from './components/MemberInfo'
import Count from './components/Count'
import LikeCount from './components/LikeCount'
import LikeCount2 from './components/LikeCount2'
import BattleNumber from './components/BattleNumber'
/*
  1. Component(컴포넌트)
  - UI를 표현하는 최소 단위
  - 컴포넌트를 만들 때 파일명은 반드시 대문자로 정의
  
  2. props(프로퍼티)
     - 리액트는 상위에서 하위로 데이터를 전달하는 방식(단방향)
     - 값을 전달하는 방식은 객체({key:value})로 전달
      ex) <Menubox drink={"트랄랄레로 트랄랄라"} price={2500}/>
       -> {"drink":"트랄랄레로 트랄랄라","price":2500} 형태로 생성한 후 하위 컴포넌트로 전달
       - 상위 컴포넌트로부터 전달받은 값을 담고 있는 객체
  
  */
function App() {
  
  return (
    <>
    
     {/* <Menubox drink={"트랄랄레로 트랄랄라"} price={2500} src={'https://i.ytimg.com/vi/FS5TEP_-OLQ/maxresdefault.jpg'}/>
     <Menubox drink={"퉁퉁퉁퉁퉁 사우르"} price={200} src ={'https://letter.wepick.kr/wp-content/uploads/2025/04/%ED%89%81-%ED%89%81-%ED%89%81-%ED%89%81-%ED%89%81-%ED%89%81-%ED%89%81-%ED%89%81-%ED%89%81-%EC%82%AC%ED%9B%84%EB%A5%B4-1024x1024.png'}/>
     <Menubox drink={"발레리노 카푸치노"} price={500} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSTM6yza_9p_oz8U1uQSfkuUQzVVQANyRX9g&s'}/> */}
    {/*실습) 야구팀 대표 투수 정보(야구팀명, 투수명) 출력해보기*/}
     {/* <div className='container'>
        <MemberInfo team="KIA 타이거즈"  name="강동근"/>
        <MemberInfo team="KIA 타이거즈" name="강동근"/>
        <MemberInfo team="KIA 타이거즈" name="강동근"/>
        <MemberInfo team="KIA 타이거즈" name="강동근"/>
      </div> */}
     {/* <Count></Count> */}
    
    {/* state실습 */}
    {/* <LikeCount></LikeCount> */}

    {/* state 실습3 */}
    {/* <LikeCount2></LikeCount2> */}

    {/* state실습 4 */}
    <BattleNumber/>
    </>
  )
}

export default App
