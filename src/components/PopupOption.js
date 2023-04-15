import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import produce from "immer"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import './Popup.css'




function PopupOption(props) {
  const {index,index2,index3,menu,setMenu,group} = props 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = ()=>{
    let newOption = {name:'New Option', price:0}
    setMenu(
        produce((draft)=>{
    draft[index].items[index2].groups[index3].options.push(newOption)
    })
    )}

  const handleDelete = () => {
    setMenu(
      produce((draft)=>{
        draft[index].items[index2].groups.splice(index3,1)
      })
    )
    handleClose()
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    let data = e.target.elements
    const name = data.name.value
    const type = data.group.value==1? true:false;
    const optionLen = menu[index].items[index2].groups[index3].options.length
    let options = []
    for(var i=0;i<optionLen;i++)
		{
        let option = {name:data[`optionName${i}`].value,price:data[`optionPrice${i}`].value}
        options.push(option)
	}
    let newData = {name,type,options}
    setMenu(
         produce((draft)=>{
           draft[index].items[index2].groups[index3] = newData 
         })
      )

    
  }


  const SelectOption = ()=>{
    let number = group.required? "1":"2"
    return (
    <InputGroup className="mb-3" >
          <Form.Select defaultValue={number} name='group' aria-label="Default select example">
      <option value="1">Required</option>
      <option value="2">Optional</option>)
    </Form.Select>
      </InputGroup>
      )
  }
  const deleteOption = (e)=>{
    console.log(e.target.id)
    setMenu(
        produce((draft)=>{
          draft[index].items[index2].groups[index3].options.splice(parseInt(e.target.id),1)
        })
      )
  }

  const OptionSection = (props) =>{
    const {name,price,index4} = props
    return (
    <div className='option-section'>
      <Form.Label>Option Name</Form.Label>
              <Form.Control type="text"
                name={`optionName${index4}`}
                required
                className='mb-4'
                defaultValue={name}
                ></Form.Control>

      <Form.Label>Price $</Form.Label>
              <Form.Control type='number' step='0.1' name={`optionPrice${index4}`}
              defaultValue={price}
              required/>
      <Button variant="outline-danger mt-3" id={index4} onClick={deleteOption}>
               Delete
        </Button>
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
          <Form className='option-form' onSubmit={handleSubmit}>
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
          <Form.Label>
          Options <Button variant='outline-info' onClick={handleAdd}>+ Add</Button>
        </Form.Label>
          {group.options.map((option,i)=>
            <OptionSection key={i} index4={i} name={option.name} price={option.price} />
          )}
          <Button variant="outline-info" className='m-3' type='submit'>
               Save Changes
          </Button>
          </Form>

        </Modal.Body>

        <Modal.Footer>
        <Button variant="danger" onClick={handleDelete}>
               Delete the Option Group
        </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupOption