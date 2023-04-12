import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import produce from "immer"
import InputGroup from 'react-bootstrap/InputGroup';

function PopupItem(props) {
  const {index,index2,menu,setMenu} = props 
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
    // update menu 
    setMenu(
      produce((draft)=>{
      draft[index].items[index2].name= e.target.elements.name.value
      draft[index].items[index2].description = e.target.elements.description.value
      draft[index].items[index2].price = Number(e.target.elements.price.value)
      })
    )

    e.preventDefault()
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item</Form.Label>
              <Form.Control
                type="text"
                name='name'
                defaultValue={menu[index].items[index2].name}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control name='description' as="textarea" rows={4} defaultValue={menu[index].items[index2].description}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price $</Form.Label>
              <Form.Control type='number' step='0.1' name='price' defaultValue={menu[index].items[index2].price}
              required/>
            </Form.Group>
            <Button className='m-1' variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button  className='m-1' variant="primary" type='submit'>
               Save Changes
            </Button>
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