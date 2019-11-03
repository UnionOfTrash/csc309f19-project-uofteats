import React from "react"
import {Modal, Card, Button, Form, Col, Row} from "react-bootstrap"

class FtInfoCard extends React.Component{
    
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
                Food Truck Info
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <Card className="text-center">
                        <Card.Header>Food Truck ID # {data.id}</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                        Name
                                        </Form.Label>
                                        <Col sm="10">
                                        <Form.Control className="info-item" plaintext readOnly defaultValue={data.name} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                        Email
                                        </Form.Label>
                                        <Col sm="10">
                                        <Form.Control className="info-item" plaintext readOnly defaultValue={data.email} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                        Phone
                                        </Form.Label>
                                        <Col sm="10">
                                        <Form.Control className="info-item" plaintext readOnly defaultValue={data.phone} />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                    </Card>
              </Modal.Body>
              <Modal.Footer>

                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>  
        )
    }
}

export default FtInfoCard