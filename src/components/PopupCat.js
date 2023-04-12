import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import produce from "immer"

function PopupCat(props) {
  const {index,menu,setMenu} = props 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit =(e) =>{
    // update menu 
    setMenu(
      produce((draft)=>{
        draft[index].category= e.target.elements.category.value
        draft[index].description = e.target.elements.description.value
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
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name='category'
                defaultValue={menu[index].category}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control name='description' as="textarea" rows={3} defaultValue={menu[index].description}/>
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
        <Button variant="danger">
               Delete the category
        </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupCat