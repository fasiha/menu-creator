import './Category.css'
import React,{useState} from "react";
import ItemCard from '../parts/ItemCard.js'
import Button from 'react-bootstrap/Button'; 
import produce from "immer"

const Category = props => {
    const {category,setMenu,menu,index} = props
    const [isEdit,setIsEdit] = useState(false)
    console.log(menu[index])
    const handleClick = (e) =>{
        // setDescriptions(
        //     produce((draft)=>{
        //         draft[category] = 'This is a test!!'
        //     })
        // )
    }
    const CategoryForm = ()=>{

    }
    return (
        <div id={category} className='category'>
            <h1 className='cat'>{menu[index].category}</h1>
            <p className='cat-desc'>{menu[index].description && menu[index].description}</p>
            <Button variant="info m-3" onClick={handleClick}>
            Edit
            </Button>
            {menu[index].items && menu[index].items.map((item,index2)=>(
                <div key={index2} draggable>
                   <ItemCard item={item} index={index} index2={index2} menu ={menu} setMenu={setMenu} />
                </div>
            ))}   

        </div>
        );
  };
export default Category