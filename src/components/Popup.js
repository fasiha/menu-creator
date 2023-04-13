import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Popup.css'
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react'


// export file 
// from https://theroadtoenterprise.com/blog/how-to-download-csv-and-json-files-in-react
const downloadFile = ({ data, fileName, fileType },restaurant) => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: fileType })
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement('a')
  a.download = fileName
  a.href = window.URL.createObjectURL(blob)
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  })
  a.dispatchEvent(clickEvt)
  a.remove()
}


const exportToJson = (e,data,restaurant) => {
  e.preventDefault()
  let whole = {restaurant}
  whole['menu'] = data
  console.log(whole)
  downloadFile({
    data: JSON.stringify(whole),
    fileName: `${restaurant}.json`,
    fileType: 'text/json',
  }, restaurant)
}


function Popup(props) {
  const {text,show,setShow,menu,setMenu,restaurant} = props
  const [selectedFile, setSelectedFile] = useState(null);
  const handleClose = () => setShow(false);
  let message = ''
  if (text==='Upload'){
    message = "Make a menu from uploaded file."
  }
  else {
    message = "Download the current menu as a JSON file."
  }
  const duSection = () =>{
    if (text=='Upload'){
      return (
      <div className='file-form'>
      <Form onSubmit={readFile}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control name='path' type="file" accept='.json'
        onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </Form.Group>
      <Button className='m-3' variant="info" type='submit'>
            Write
      </Button>
      </Form>
      </div>
      )
    }
    return (
      <div className='file-form'>
      <Button className='m-5' variant="info" onClick={(e)=>exportToJson(e,menu,restaurant)}>
            Download
      </Button>
      </div>
    )
  }

  const readFile = (e)=>{
    e.preventDefault()
    let fileReader =new FileReader()
    fileReader.readAsText(selectedFile,"UTF-8")
    fileReader.onload = e => {
    const content = e.target.result;
    setMenu(JSON.parse(content)['menu']);
    handleClose()
  }
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
           {duSection()}
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