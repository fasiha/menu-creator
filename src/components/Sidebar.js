import './Sidebar.css'
import React from "react";
import {Nav} from "react-bootstrap";

const Sidebar = props => {
    const {categories} = props

    return (
        <>
            
            <Nav className="col-md-3 d-none d-md-block bg-light sidebar">
            {categories.map((category,index)=>(
                <Nav.Item key={index}>
                <Nav.Link href={'#'+category}>{category}</Nav.Link>
                </Nav.Item>

            ))}
            
            
            </Nav>
          
        </>
        );
  };
export default Sidebar