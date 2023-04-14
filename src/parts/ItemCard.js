import Card from 'react-bootstrap/Card';
import './ItemCard.css'
import PopupItem from '../components/PopupItem'
import React,{useState} from 'react'
import PopupOption from '../components/PopupOption'

function ItemCard(props) {
  const {item,menu,setMenu,index,index2}=props 
  const [show,setShow] = useState(false)
  
  
  return (
    <Card className='shadow-sm card'>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text className='text-muted p-2'>
            {item.description}
        </Card.Text>
        <Card.Text className='p-2 price'>
            $ {item.price.toFixed(2)}
        </Card.Text> 

        <div>{item.groups && item.groups.map((group,i)=>
          <div key={i}><PopupOption index3= {i} group={group}/></div>)}</div>
      </Card.Body>
      <Card.Footer>
      <PopupItem menu ={menu} item={item} setMenu={setMenu} index={index} index2={index2} show={show} setShow={setShow}/>
      </Card.Footer>
    </Card>
  );
}

export default ItemCard;