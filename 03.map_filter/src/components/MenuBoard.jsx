import React, { useState } from 'react'
import MenuNav from './MenuNav'
import MenuItem from './MenuItem'
import menuData from '../assets/data/coffee_menu.json'

const MenuBoard = () => {
    
    const [datas,setData] = useState(menuData);
    const menuFilter = (category) => {
        if (category==="All") {
            setData(menuData);
        }else{
            setData(menuData.filter((menu)=>menu.category===category))
        }
        
    }
  return (
    <div className='menu-board'>
        <MenuNav onFilter={menuFilter}/>
        <div className="menu-list">
        {datas.map((data) => (
            <div key={data.id}>
                <MenuItem data={data}/>
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default MenuBoard