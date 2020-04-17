import React,{useState} from 'react'
import { Button,Modal } from "react-bootstrap";



export default function MyModel(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          See Detail
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}
        size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {props.bookData.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
              <table className="table">
              <tbody>
                <tr>
                  <td>
                    Name
                  </td>
                  <td>
                  {props.bookData.name}
                  </td>
                </tr>
                <tr>
                  <td>
                    Author
                  </td>
                  <td>
                  {props.bookData.auther}
                  </td>
                </tr>
                <tr>
                  <td>
                  Categories
                  </td>
                  <td>
                  {props.bookData.Categories}
                  </td>
                </tr>
                <tr>
                  <td>
                  semester
                  </td>
                  <td>
                  {props.bookData.semester}
                  </td>
                </tr>
                <tr>
                  <td>
                  stars
                  </td>
                  <td>
                  {props.bookData.stars}
                  </td>
                </tr>
                {/* <tr>
                  <td>
                  cover
                  </td>
                  <td>
                  {props.bookData.cover}
                  </td>
                </tr> */}
              </tbody>
            </table>
              </div>
              <div className="col-md-4">
              <img src={`${process.env.PUBLIC_URL}/${props.bookData.path}`} alt={props.name}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="bg-danger" onClick={handleClose}>
              Close
            </Button>
          
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  