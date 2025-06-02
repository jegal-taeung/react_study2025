import React, { useState } from 'react'

const LikeCount = () => {
    
    const [num,setNum] = useState(0);
    const [emoji,setEmoji] = useState("🤍")
    const emoClick = () => {
        
        if(emoji === "🤍"){
            setEmoji("💘");
            setNum(1);
        }
        else{
            setEmoji("🤍");
            setNum(0);
        }
    }
  return (
    <div>
        <img 
        src={"src/assets/img/123.jpg"} 
        alt="{chu}" 
        style={{width:300, height : 600}}/>
        <p><span onClick={emoClick}>{emoji}</span>좋아요 {num}개</p>
    </div>
  )
}

export default LikeCount