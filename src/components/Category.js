import './Category.css'
import React from "react";
 
const Category = props => {
    const {category} = props
    return (
        <div id={category} className='category'>
            <h1>{category}</h1>
        </div>
        );
  };
export default Category