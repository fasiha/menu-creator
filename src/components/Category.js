import './Category.css'
import React from "react";
import ItemCard from '../parts/ItemCard.js'
 
const Category = props => {
    const {category,description,items,itemsDesc,prices} = props
    return (
        <div id={category} className='category'>
            <h1 className='cat'>{category}</h1>
            <p className='cat-desc'>{description && description}</p>
            {items[category].map((item,index)=>(
                <ItemCard key={index} item={item} itemsDesc={itemsDesc} prices={prices}/>
            ))}
        </div>
        );
  };
export default Category