import Card from 'react-bootstrap/Card';
import './ItemCard.css'
function ItemCard(props) {
  const {item,itemsDesc,prices}=props
  return (
    <Card style={{ width: 'calc( 75 vw -200 px)', margin:'20px'}}>
      <Card.Body>
        <Card.Title>{item}</Card.Title>
        <Card.Text className='text-muted p-2'>
            {itemsDesc[item]}
        </Card.Text>
        <Card.Text className='p-2 price'>
            $ {prices[item].toFixed(2)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;