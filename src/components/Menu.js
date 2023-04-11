import './Menu.css'
import React from "react";
import Category from "./Category.js"
 
const Menu = props => {
    const {categories} = props
    return (
        <div className='menu'>
            <h1>Menu</h1>
            {categories.map((category,index)=>(
                <Category key={index} category={category} />
            ))}
        </div>
        );
  };
export default Menu