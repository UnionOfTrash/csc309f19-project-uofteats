import React from "react"
import {Modal, Button, Card} from "react-bootstrap"

class EditPopUpModal extends React.Component{
    
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
                  Edit {this.props.dataname}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <Card className="text-center">
                        <Card.Header>User ID # {this.props.userdata.id}</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>EDIT USER</Card.Title> */}
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Card.Body>
                        {/* <Card.Footer className="text-muted">User Id: {user.id}</Card.Footer> */}
                    </Card>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide} variant="success">Save</Button>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
        );
    }
}

  export default EditPopUpModal