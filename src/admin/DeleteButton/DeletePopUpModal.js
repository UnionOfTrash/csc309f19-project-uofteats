import React from "react"
import {Modal, Button} from "react-bootstrap"


class DeletePopUpModal extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <Modal
              show={this.props.show}
              onHide={this.props.onHide}
              size="sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Delete a {this.props.dataname}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Do you want to remove the {this.props.dataname} : {this.props.userdata.name} ?
              </Modal.Body>
      
              <Modal.Footer>
                  <Button onClick={this.props.onDelete} 
                          variant="danger">
                      Delete
                  </Button>
      
                  <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
    }

}

export default DeletePopUpModal