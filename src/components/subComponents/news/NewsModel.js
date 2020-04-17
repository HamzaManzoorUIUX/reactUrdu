import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import NewsView from "./NewsView";

export default function NewsModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>
        <NewsView i={props.i} />
      </div>
      {/* <Button variant="primary" >
          See Detail
        </Button> */}

      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.i.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-8">
              <h6 className="rtl">{props.i.Title}</h6>
              <p className="rtl">{props.i.Data}</p>
            </div>
            <div className="col-md-4">
              <img
                src={`${process.env.PUBLIC_URL}/${props.i.path}`}
                className="img-thumbnail"
                alt={props.name}
              />
            </div>
          </div>
          <p>{props.i.Date.toString()}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="bg-danger"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
