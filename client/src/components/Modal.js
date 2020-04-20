import React, {  useState,} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




function MyVerticallyCenteredModal(props){
 
    return ( 
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
    
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
        
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
     );
  }


function NewModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState({});
  

   
   
  return (
 
    <>
      <Button variant="primary" onClick={() => {
        setModalShow(true)
        // detailId();
        
      } }>
        See Detail
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        listId={props.listing_id}
        propertyId={props.property_id}
        newData = {data}
      
      />
    </>
  );
}

export default NewModal;


 
