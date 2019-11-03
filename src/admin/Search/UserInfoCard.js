import React from "react"
import {Modal, Card, Button, Form, Col, Row} from "react-bootstrap"
import DeleteButton from "../DeleteButton/DeleteButton"

class UserInfoCard extends React.Component{

    constructor(props){
        super(props)
        this.state={
            readOnly:true,
            plaintext:true,
            inEdit:false
        }
    }

    handleEdit=()=>{
        this.setState({
            inEdit:true,
            readOnly:false,
            plaintext:false
        })
    }

    handleSave=()=>{
        this.props.editData()
        this.handleClose()
    }

    handleClose=()=>{
        this.setState({
            readOnly:true,
            plaintext:true,
            inEdit:false
        })

        this.props.onHide()
    }

    handleRemoveUser=()=>{
        this.props.removeUser(this.props.data)
        this.handleClose()
    }
    
    render(){

        const {data} = this.props

        return(
            <Modal
              show={this.props.show}
              onHide={this.handleClose}
              size="ls"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                User Info
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <Card className="text-center">
                        <Card.Header>
                            <div className="image-container">
                                <img src={data.img} alt="FT" width="50" height="50" />
                            </div>
                              
                            User ID # {data.id}
                        </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                        Name:
                                        </Form.Label>
                                        <Col sm="10">
                                        <Form.Control name="Username" 
                                                    onChange={this.props.handleInputChange} 
                                                    className={(this.state.inEdit)? "":"info-item"} 
                                                    plaintext={this.state.plaintext} 
                                                    readOnly={this.state.readOnly} 
                                                    defaultValue={data.name} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                        Email:
                                        </Form.Label>
                                        <Col sm="10">
                                        <Form.Control name="Useremail" 
                                                    onChange={this.props.handleInputChange}  
                                                    className={(this.state.inEdit)? "":"info-item"} 
                                                    plaintext={this.state.plaintext} 
                                                    readOnly={this.state.readOnly} 
                                                    defaultValue={data.email} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                        Phone:
                                        </Form.Label>
                                        <Col sm="10">
                                        <Form.Control name="Userphone" 
                                                    onChange={this.props.handleInputChange} 
                                                    className={(this.state.inEdit)? "":"info-item"} 
                                                    plaintext={this.state.plaintext} 
                                                    readOnly={this.state.readOnly} 
                                                    defaultValue={data.phone} />
                                        </Col>
                                    </Form.Group>
                                
                                </Form>
                            </Card.Body>
                    </Card>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={(this.state.inEdit)? this.handleSave:this.handleEdit} variant="success">
                    {(this.state.inEdit)? "Save":"Edit"}
                </Button>

                <Button onClick={this.handleRemoveUser} variant="danger">
                    Delete
                </Button>

                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>  

        )
    }
}

export default UserInfoCard