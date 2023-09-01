import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import insta from '../images/insta.svg'

function Tasks(props) {

    const handleImageClick = () => {
      props.setClicked(true); // Update the state variable when the image is clicked
    };

  return (
    <div>
        <h2 className='bck'>1. Follow us on Instagram : <a href="https://instagram.com/bougiee_m" target="_blank" rel="noopener noreferrer" onClick={handleImageClick}>
              <img src={insta} alt="Bougie M Instagram account" 
                style={{
                  width:'30px'
              }}/>
            </a></h2>
       {/* <InputGroup>
          <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Instagram username"
            aria-label="Instagram username"
            aria-describedby="btnGroupAddon"
          />
        <Button variant="success">Check</Button>{' '}

        </InputGroup> */}
    </div>
  );
}

export default Tasks;