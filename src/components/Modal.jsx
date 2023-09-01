import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Modals(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageClick = () => {
    props.setIsLoggedIn(true);
    console.log(props.IsLoggedIn);
    setShow(false);
    console.log('done');
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Or click me to enter your mail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill the fields to spin the wheel !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <br/>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="string"
                placeholder="First name"
                autoFocus
              />
              <br/>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="string"
                placeholder="Last name"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleImageClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;