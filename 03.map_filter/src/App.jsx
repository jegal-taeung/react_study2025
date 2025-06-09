
import './App.css'
import Button from 'react-bootstrap/Button';
import MapArrayExam from './components/MapArrayExam';
import MapObjectExam from './components/MapObjectExam';
import MenuBoard from './components/MenuBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterExam from './components/FilterExam';
function App() {
  

  return (
    <>
      {/* map() 함수 실습1 */}
      {/* <MapArrayExam/> */}
      {/* <MapObjectExam/> */}
      {/* filter() 함수 실습 */}
      {/* <FilterExam/> */}

      {/* 실습) 음료 메뉴 출력하기 */}
      <MenuBoard/>
    </>
  )
}

export default App
