import Card from 'react-bootstrap/Card';
import './ItemCard.css'
function ItemCard(props) {
  const {item,menu,setMenu,index,index2}=props 
  console.log(menu[index].items[index2])
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
      </Card.Body>
    </Card>
  );
}

export default ItemCard;