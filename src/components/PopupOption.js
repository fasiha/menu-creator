import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import produce from "immer"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import './Popup.css'



function PopupItem(props) {
  const {index,index2,menu,setMenu,group} = props 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    setMenu(
      produce((draft)=>{
        draft[index].items.splice(index2,1)
      })
    )
    handleClose()
  }

  const handleSubmit =(e) =>{

    e.preventDefault()
    handleClose()
  }

  const SelectOption = ()=>{
    let number = group.required? "1":"2"
    return (
    <InputGroup className="mb-3" >
          <Form.Select defaultValue={number} aria-label="Default select example">
      <option value="1">Required</option>
      <option value="2">Optional</option>)
    </Form.Select>
      </InputGroup>
      )
  }

  const OptionSection = (props) =>{
    const {name,price} = props
    return (
    <div className='option-section'>
      <Form.Label>Option Name</Form.Label>
              <Form.Control type="text"
                name='option-name'
                required
                className='mb-4'
                defaultValue={name}
                ></Form.Control>

      <Form.Label>Price $</Form.Label>
              <Form.Control type='number' step='0.1' name='price' 
              defaultValue={price}
              required/>
      </div>) 
  }

  return (
    <>
      <Button variant="outline-secondary" className='mt-3' onClick={handleShow}>
        Edit {group.name} 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {group.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Label>Option Group Name</Form.Label>
              <Form.Control
                type="text"
                name='name'
                required
                className='mb-4'
                defaultValue={group.name}
              />
          <Form.Label>Type</Form.Label>
          <SelectOption />
          {group.options.map((option,i)=>
            <OptionSection key={i} name={option.name} price={option.price} />
          )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={handleDelete}>
               Delete the Item
        </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupItem