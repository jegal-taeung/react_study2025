import React from 'react'

const App2 = () => {
    let name = prompt("君の名前は...");

    // 날짜, 시간 관련 정보를 가진 객체
    let today = new Date();

    console.log(today)
    console.log(today.toLocaleDateString()); // 현지 시간 기준 날짜(년/월/일) 반환
    console.log(today.getMonth()+1);
    let month = today.getMonth();
    // let result ="";
    // if (month >=3 && month<=5) {
    //     result = "봄";
    // }else if(month >=6 && month<=8) {
    //     result = "여름";
    // }else if(month>=9 && month<=11) {
    //     result = "가을";
    // }else {
    //     result="겨울";
    // }

    
    let seasons = ["겨울", "겨울", "봄", "봄", "봄", "여름", "여름", "여름", "가을", "가을", "가을", "겨울"];
    let season = seasons[month];
  return (
    <div>
        <h1>
            {today.toLocaleDateString()}
        </h1>
        <hr/>   
        {name}님 지금은 {season}입니다.좋은하루 보내세요:)
        

    </div>
  )
}

export default App2