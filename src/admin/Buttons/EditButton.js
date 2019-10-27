import React from "react"

import EditUserDataCard from "./EditUserDataCard"

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
            Edit {props.dataname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditUserDataCard
                user={props.userdata}
            />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="success">Save</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function Edit(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="success" onClick={() => setModalShow(true)}>
          Edit Data
        </Button>
  
        <PopUpEditModal
          {...props}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

class EditButton extends React.Component{
    render() {
        return (
        <Edit 
            userdata={this.props.userdata}
            dataname={this.props.dataname}

          />)
    }
}
export default EditButton