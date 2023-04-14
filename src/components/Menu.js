import './Menu.css'
import React from "react";
import Category from "./Category.js"
import ItemCard from "../parts/ItemCard"
import ImagePart from './ImagePart'
 
const Menu = props => {
    const {menu, setMenu,image} = props
    let categories = []
    for (let i of menu){
        categories.push(i)
    }
    return (
        <div className='menu'>
            <h1 className='header'>Menu</h1>
            <ImagePart image={image} />
            {categories && categories.map((category,index)=>(
                <Category image={image} key={index} category={category} index={index} menu={menu} setMenu={setMenu}/>
            ))}
        </div>
        );
  };
export default Menu