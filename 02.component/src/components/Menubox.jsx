import React from 'react'

// const Menubox = (props) => {
//     console.log("App컴포넌트에서 전달 받은 값 : ",props);
//   return (
    
    
//     <div>
//         <h1>{props.drink}</h1>
//         <p>{props.price}</p>
//         <img src={props.src} style={{width:500}}></img>
//      </div>
//   )
// }

// 구조분해할당
// {props -> {"menuNm":"아메리카노","price":2500}}
// const {menuNm, price} = props;
const Menubox = ({drink, price, src}) => {
    // console.log("App컴포넌트에서 전달 받은 값 : ",props);
  return (
    
    
    <div>
        <h1>{drink}</h1>
        <p>{price}</p>
        <img src={src} style={{width:500}}></img>
     </div>
  )
}

export default Menubox