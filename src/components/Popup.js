import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup(props) {
  const {text,show,setShow} = props
  const handleClose = () => setShow(false);
  let message = ''
  if (text==='Upload'){
    message = "Make a menu from uploaded file."
  }
  else {
    message = "Download a menu file."
  }
  
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{text} File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;