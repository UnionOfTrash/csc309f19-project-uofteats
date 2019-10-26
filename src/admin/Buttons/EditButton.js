import React from "react"

import {Modal, Button} from "react-bootstrap"

// for edit button
function PopUpEditModal(props) {
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
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function Edit() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="success" onClick={() => setModalShow(true)}>
          Edit Data
        </Button>
  
        <PopUpEditModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

class EditButton extends React.Component{
    render() {
        return (<Edit/>)
    }
}
export default EditButton