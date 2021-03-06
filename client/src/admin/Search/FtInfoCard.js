import React from "react"
import {Modal, Card, Button, Form, Col, Row} from "react-bootstrap"

// The pop up modal to show the searching result for the Food truck
class FtInfoCard extends React.Component{

    constructor(props){
        super(props)
        this.state={
            readOnly:true,
            plaintext:true,
            inEdit:false
        }
    }

    // handle the click for edit button
    handleEdit=()=>{
        this.setState({
            inEdit:true,
            readOnly:false,
            plaintext:false
        })
    }

    // handle the click for save button
    handleSave=()=>{
        this.handleClose()
        this.props.editData()
    }

    // handle the click for close button
    handleClose=()=>{
        this.setState({
            readOnly:true,
            plaintext:true,
            inEdit:false
        })

        this.props.onHide()
    }

    // handle the click for delete button
    handleRemoveUser=()=>{
        this.handleClose()
        this.props.removeFt(this.props.data)
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
                Food Truck Info
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <Card className="text-center">
                        <Card.Header>
                            <div className="image-container">
                                <img src={data.profileImg} alt="FT" width="50" height="50" />
                            </div>
                            Food Truck ID # {data._id}
                        </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group as={Row} controlId="1">
                                        <Form.Label column sm="3">
                                            Name:
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control name="Ftname" 
                                                      onChange={this.props.handleInputChange} 
                                                      className={(this.state.inEdit)? "":"info-item"} 
                                                      plaintext={this.state.plaintext} 
                                                      readOnly={this.state.readOnly} 
                                                      defaultValue={data.name} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="2">
                                        <Form.Label column sm="3">
                                            Email:
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control name="Ftemail" 
                                                        onChange={this.props.handleInputChange} 
                                                        className={(this.state.inEdit)? "":"info-item"} 
                                                        plaintext={this.state.plaintext}
                                                        readOnly={this.state.readOnly} 
                                                        defaultValue={data.email} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="3">
                                        <Form.Label column sm="3">
                                            Phone:
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control name="Ftphone" 
                                                        onChange={this.props.handleInputChange} 
                                                        className={(this.state.inEdit)? "":"info-item"}
                                                        plaintext={this.state.plaintext}
                                                        readOnly={this.state.readOnly} 
                                                        defaultValue={data.phone} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="4">
                                        <Form.Label column sm="3">
                                            Location:
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control name="Ftlocation" 
                                                        onChange={this.props.handleInputChange} 
                                                        className={(this.state.inEdit)? "":"info-item"}
                                                        plaintext={this.state.plaintext}
                                                        readOnly={this.state.readOnly} 
                                                        defaultValue={data.location} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="5">
                                        <Form.Label column sm="3">
                                            Cuisine:
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control name="Fttype" 
                                                        onChange={this.props.handleInputChange} 
                                                        className={(this.state.inEdit)? "":"info-item"}
                                                        plaintext={this.state.plaintext}
                                                        readOnly={this.state.readOnly} 
                                                        defaultValue={data.cuisine} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="6">
                                        <Form.Label column sm="3">
                                            Time:
                                        </Form.Label>
                                        <Col sm="9">
                                        <Form.Control name="Fttime" 
                                                        onChange={this.props.handleInputChange} 
                                                        className={(this.state.inEdit)? "":"info-item"}
                                                        plaintext={this.state.plaintext}
                                                        readOnly={this.state.readOnly}
                                                        defaultValue={data.time} />
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

export default FtInfoCard