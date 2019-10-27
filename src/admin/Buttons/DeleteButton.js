import React from "react"

import {Modal, Button, Toast} from "react-bootstrap"

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
            <Button onClick={props.onDelete} 
                    variant="danger">
                Delete
            </Button>

            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function DeleteToast(props){

  return(
    <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
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
          onDelete={props.onDelete}
      />
      {/* <DeleteToast {...props}
          show={modalShow}
          onClick={() => setModalShow(false)}/> */}
    </>
  );
}

class DeleteButton extends React.Component{


  render() {
    const {userdata, dataname,removeUser} = this.props

    return (<Delete userdata={userdata}
                    dataname={dataname}
                    onDelete={()=>{

                      removeUser(userdata)}
                    }
            />
    )
  }
}
export default DeleteButton