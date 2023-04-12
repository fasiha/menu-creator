import './Category.css'
import React,{useState} from "react";
import ItemCard from '../parts/ItemCard.js'
 
const Category = props => {
    const {category,description,items,itemsDesc,prices} = props
    return (
        <div id={category} className='category'>
            <h1 className='cat'>{category}</h1>
            <p className='cat-desc'>{description && description}</p>
            {items[category].map((item,index)=>(
                <div key={index} draggable>
                <ItemCard item={item} itemsDesc={itemsDesc} prices={prices}/>
                </div>
            ))}

        </div>
        );
  };
export default Category