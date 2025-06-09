import React from 'react'
import NavItem from 'react-bootstrap/esm/NavItem'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MenuNav = ({onFilter}) => {

    const categorys = ['All', '커피', '디저트', '에이드', '베이커리'

    ];

  return (
    <>
        <ul className='menu-nav'>
            {categorys.map((category,index) => (
                <li onClick={()=>onFilter(category)}key={index}>{category}</li>
            ))}
        </ul>
      
    </>
  )
}

export default MenuNav