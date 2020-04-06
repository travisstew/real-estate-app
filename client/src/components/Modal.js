import React, { Component, useState } from 'react';
// import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

class MyVerticallyCenteredModal extends Component {

  state = { 
        beds:"",
   }



  render() { 
    return ( 
      <Modal
      {...this.props}
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
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. {this.props.listId}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
     );
  }
}
 

function NewModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  // console.log('got the id', props.listing_id);
//  console.log(props.listing_id);
  
   const detailId=()=>{
              Axios({
      method: 'get', 
      url: `https://realtor.p.rapidapi.com/properties/detail?listing_id=${props.listing_id}&prop_status=for_sale&property_id=${props.property_id}`,
      // data: {id: varID},
      headers: {
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "00b956d7c8msh458ab8d1c20369dp182f31jsn413e2da1e3e2"
      }
    }).then(res=> { 
      console.log(res.data);
      data= res.data;
     });
   }

  return (
    
    <>
      <Button variant="primary" onClick={() => {
        setModalShow(true)
        detailId();
      } }>
        See Detail
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        listId={props.listing_id}
        propertyId={props.property_id}
       

      />
    </>
  );
}

export default NewModal;