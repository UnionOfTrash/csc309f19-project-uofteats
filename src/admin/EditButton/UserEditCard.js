import React from "react"
import {Card, Form, Row, Modal, Button} from "react-bootstrap"

class UserEditCard extends React.Component{

    constructor(props){
        super(props)
        this.state={
            id:this.props.data.id
        }
    }

    saveClick=() => {
        this.props.onHide()
        setTimeout(() => {
            this.props.editData()
        }, 300);
    }

    render(){
        const {data} = this.props
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
                  Edit {this.props.dataType}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <Card className="text-center">
                        <Card.Header>User ID # {data.id}</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control name='Username' onChange={this.props.handleInputChange} placeholder={data.name} />
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="exampleForm.ControlInput2">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control name='Useremail' onChange={this.props.handleInputChange} placeholder={data.email} />
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="exampleForm.ControlInput3">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control name='Userphone' onChange={this.props.handleInputChange} placeholder={data.phone} />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                    </Card>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.saveClick} variant="success">Save</Button>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>  
        )
    }
}

export default UserEditCard