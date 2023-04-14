import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import './Header.css'
import Popup from './Popup'
import Sidebar from './Sidebar.js'
import Menu from './Menu.js'

import sushiya from '../menus/sushiya.json'

// sample menu 
const loadedData = JSON.stringify(sushiya)
const json = JSON.parse(loadedData)


function Header(props) {
    const [menu,setMenu] = useState(json['menu'])
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const handleShow = () => setShow(true);

    function fileUpload(e){
        setText(e.target.innerText)
        handleShow()
    }
    function fileDownload(e){
        setText(e.target.innerText)
        handleShow()
    
    }
   return (
    <>
      <Navbar sticky='top' bg="dark" variant="dark" expand='lg'>
        <Container>
          <Navbar.Brand href="#home">{json.restaurant}</Navbar.Brand>
          <div>
          <Button variant="outline-primary" onClick={fileUpload}>Upload</Button>{' '}
          <Button variant="outline-success" onClick={fileDownload}>Download</Button>{' '}
          </div>
        </Container>
        
      </Navbar>
      <Popup menu={menu} setMenu={setMenu} restaurant={json.restaurant} text={text} show={show} setShow = {setShow} />
      <div className='main'>
        
        <Sidebar setMenu = {setMenu} menu={menu}/>
        <Menu setMenu = {setMenu} image={json['image']} menu={menu}/> 
    </div>
    </>
  );
}

export default Header;