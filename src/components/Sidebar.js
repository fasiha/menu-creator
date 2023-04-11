import './Sidebar.css'
import React,{useRef} from "react";
import {Nav} from "react-bootstrap";

const Sidebar = props => {
    const dragItem = useRef();
    const dragOverItem = useRef();

    const {setCategories,categories} = props
    const dragStart = (e, position) => {
        dragItem.current = position;
      };
    const dragEnter = (e, position) => {
        dragOverItem.current = position;
      };
    
      const drop = (e) => {
        const copyListItems = [...categories];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setCategories(copyListItems);
      };
    
    return (
        <>
            
            <Nav className="col-md-3 d-block bg-light sidebar">
            {categories &&  categories.map((category,index)=>(
                <Nav.Item key={index} className='m-2'>
                <Nav.Link href={'#'+category} draggable 
                onDragStart={(e)=>dragStart(e,index)}
                onDragEnter={(e)=>dragEnter(e,index)}
                onDragEnd = {drop}
                >{category}</Nav.Link>
                </Nav.Item>

            ))}
            
            
            </Nav>
          
        </>
        );
  };
export default Sidebar