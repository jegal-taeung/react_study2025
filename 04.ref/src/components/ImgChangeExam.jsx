import React, { useRef, useState } from 'react'

const ImgChangeExam = () => {
    const inputName = useRef('');
    const [image,setImage] = useState('');

    const changeImg = (e) => {
      e.preventDefault();
      if (inputName.current.value === '개') {
            setImage('./src/assets/img/dog.jpg');
            
      }else {
        setImage('./src/assets/img/cat.webp');
        
      }
      // 입력창의 내용을 초기화하고 해당 요소를 선택(focus)하는 기능
      keywordRef.current.value = '';
      keywordRef.current.focus();
    }
  return (
    <div>
        <h1>희망 하는 사진이 있으신가요?</h1>

        <form>
            <span><input type="text" ref={inputName}/></span>
            <span><input type="submit" value='변경' onClick={changeImg} /></span>
        </form>
        <div>
            <img src={image} alt="" className='img1'/>
        </div>


    </div>
  )
}

export default ImgChangeExam