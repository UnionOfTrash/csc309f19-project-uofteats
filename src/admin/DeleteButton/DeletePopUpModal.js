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
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Delete a {this.props.dataType}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Do you want to remove the {this.props.dataType} : {this.props.data.name} ?
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