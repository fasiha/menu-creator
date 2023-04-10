import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
   return (
    <>
      <Navbar bg="dark" variant="dark" expand='lg'>
        <Container>
          <Navbar.Brand href="#home">{props.restaurant}</Navbar.Brand>
          <div>
          <Button variant="outline-primary">Upload</Button>{' '}
          <Button variant="outline-success">Download</Button>{' '}
          </div>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default Header;