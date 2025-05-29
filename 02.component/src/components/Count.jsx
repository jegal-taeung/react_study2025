import React, { useState } from 'react'

const Count = () => {

// state 선언
const [count,setCount] = useState(0);
const handleClick = () => {
    setCount(count+1);
    console.log(count);
}
  return (
    <div>
        <div>
            <p>state:{count}</p>
            
            
            <button onClick={handleClick}>클릭+1</button>
        </div>

    </div>
  )
}

export default Count