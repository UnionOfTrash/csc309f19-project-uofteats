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
            Delete a {props.dataname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to remove the {props.dataname} : {props.userdata.name} ?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="danger">Delete</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function Delete(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="danger" onClick={() => setModalShow(true)}>
          Delete
        </Button>
  
        <PopUpEditModal
          {...props}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

class DeleteButton extends React.Component{
    render() {
        return (<Delete userdata={this.props.userdata}
                        dataname={this.props.dataname}
        />
          )
    }
}
export default DeleteButton