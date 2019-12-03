import React from "react"
import {Card, Form, Row, Modal, Button} from "react-bootstrap"

// The pop up modal for add new food truck
class AddFtCard extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    addUser=()=>{


        this.props.onHide()
        setTimeout(() => {
            this.props.addData()
        }, 300);
    }

    render(){
        return(

            <Modal
              show={this.props.show}
              onHide={this.props.onHide}
              size="ls"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {this.props.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                        <Card className="text-center">
                            <Card.Header>
                                <div className="image-container">
                                    <img src="./truck1.png" alt="FT" width="50" height="50" />
                                </div>
                                Add New Food Truck
                            </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                            <Form.Label>Food Truck Name/ User Name</Form.Label>
                                            <Form.Control name='Ftname' onChange={this.props.handleInputChange} placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="exampleForm.ControlInput2">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name='Ftpassword' onChange={this.props.handleInputChange} placeholder="Password" />
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="exampleForm.ControlInput3">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control name='Ftemail' onChange={this.props.handleInputChange} placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="exampleForm.ControlInput4">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control name='Ftphone' onChange={this.props.handleInputChange} placeholder="Phone" />
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="exampleForm.ControlInput5">
                                            <Form.Label>Location</Form.Label>
                                            <Form.Control name='Ftlocation' onChange={this.props.handleInputChange} placeholder="Location" />
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="exampleForm.ControlInput6">
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control name='Fttype' onChange={this.props.handleInputChange} placeholder="Type" />
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="exampleForm.ControlInput7">
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control name='Fttime' onChange={this.props.handleInputChange} placeholder="Time" />
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                        </Card>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.addUser} variant="success">Save</Button>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
        )
    }
}

export default AddFtCard