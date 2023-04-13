import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import './Header.css'
import Popup from './Popup'

function Header(props) {

    const {restaurant,menu} = props
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
          <Navbar.Brand href="#home">{restaurant}</Navbar.Brand>
          <div>
          <Button variant="outline-primary" onClick={fileUpload}>Upload</Button>{' '}
          <Button variant="outline-success" onClick={fileDownload}>Download</Button>{' '}
          </div>
        </Container>
        
      </Navbar>
      <Popup menu={menu} restaurant={restaurant} text={text} show={show} setShow = {setShow} />
    </>
  );
}

export default Header;