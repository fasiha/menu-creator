import './Menu.css'
import React from "react";
import Category from "./Category.js"
import ItemCard from "../parts/ItemCard"
 
const Menu = props => {
    const {categories,descriptions,items,itemsDesc,prices} = props
    return (
        <div className='menu'>
            <h1 className='header'>Menu</h1>
            {categories.map((category,index)=>(
                <Category key={index} category={category}
                description = {descriptions[category]}
                items={items} 
                itemsDesc={itemsDesc}
                prices={prices}/>
            ))}
        </div>
        );
  };
export default Menu