import Image from 'react-bootstrap/Image'
import './ImagePart.css'

const ImagePart = (props) =>{
 const {image} = props
 return (
    <div className='image-div'>
    <img src={image} className='fluid'  alt='generic restaurant image'/>
    </div>
 )  
}


export default ImagePart;