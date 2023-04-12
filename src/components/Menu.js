import './Menu.css'
import React from "react";
import Category from "./Category.js"
import ItemCard from "../parts/ItemCard"
 
const Menu = props => {
    const {menu, setMenu} = props
    let categories = []
    for (let i of menu){
        categories.push(i)
    }
    return (
        <div className='menu'>
            <h1 className='header'>Menu</h1>
            {categories && categories.map((category,index)=>(
                <Category key={index} category={category} index={index} menu={menu} setMenu={setMenu}/>
            ))}
        </div>
        );
  };
export default Menu