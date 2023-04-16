import './Category.css'
import React,{useState,useRef} from "react";
import ItemCard from '../parts/ItemCard.js'
import Button from 'react-bootstrap/Button'; 
import produce from "immer"
import PopupCat from './PopupCat'


const Category = props => {
    const {setMenu,menu,index,image} = props
    const [show, setShow] = useState(false);
    const dragItem = useRef();
    const dragOverItem = useRef();
    
    const dragStart = (e, position) => {
        dragItem.current = position;
        
      };
      const dragEnter = (e, position) => {
        dragOverItem.current = position;
       
      };

      const drop = (e) => {
        const copyListItems = [...menu[index].items];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setMenu(produce((draft)=>{
            draft[index].items = copyListItems
        }))
      };
    

    const addNewItem = () =>{
        const newItem = {'name': "New Item",description:'',price:0}
        setMenu(produce((draft)=>{
            draft[index].items.push(newItem)
        }))
    }

    return (
        <div id={menu[index].category} className='category'>
          
            <h1 className='cat'>{menu[index].category}</h1>
            <p className='cat-desc'>{menu[index].description && menu[index].description}</p>
            <PopupCat menu ={menu} setMenu={setMenu} index={index} show={show} setShow={setShow} />
            {menu[index].items && menu[index].items.map((item,index2)=>(
                <div key={index2}
                onDragStart={(e) => dragStart(e, index2)}
                onDragEnter={(e) => dragEnter(e, index2)}
                onDragEnd = {drop}
                draggable>
                   <ItemCard item={item} index={index} index2={index2} menu ={menu} setMenu={setMenu} />
                </div>
            ))}   
            
            <Button variant="outline-primary"
            onClick={addNewItem}>
            + New Item
           </Button>
        </div>
        );
  };
export default Category