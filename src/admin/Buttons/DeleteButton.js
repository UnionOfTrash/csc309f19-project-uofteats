import React from "react"

import {Modal, Button} from "react-bootstrap"

// this will shows a pop up window over the datalist
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
            <Button onClick={props.onClick} 
                    variant="danger">
                Delete
            </Button>

            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

  // this will create a delete button
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
          onClick={props.onClick}
      />
    </>
  );
}

class DeleteButton extends React.Component{
  render() {
    const {userdata, dataname,removeUser} = this.props

    return (<Delete userdata={userdata}
                    dataname={dataname}
                    onClick={()=>removeUser(userdata)}
            />
    )
  }
}
export default DeleteButton