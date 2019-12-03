import React from "react"
import {Card, Form, Row, Modal, Button} from "react-bootstrap"


class FtEditCard extends React.Component{

    constructor(props){
        super(props)
        this.state={}
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
                          <Card.Header>
                            <div className="image-container">
                              <img src={data.profileImg} alt="FT" width="50" height="50" />
                            </div>
                              Food Truck ID # {data._id}
                          </Card.Header>
                              <Card.Body>
                                  <Form>
                                  <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                          <Form.Label>Food Truck Name</Form.Label>
                                          <Form.Control name='Ftname' readOnly={true} placeholder={data.name} />
                                      </Form.Group>
                                      <Form.Group as={Row} controlId="exampleForm.ControlInput2">
                                          <Form.Label>Email Address</Form.Label>
                                          <Form.Control name='Ftemail' onChange={this.props.handleInputChange} placeholder={data.email} />
                                      </Form.Group>
                                      <Form.Group as={Row} controlId="exampleForm.ControlInput3">
                                          <Form.Label>Phone Number</Form.Label>
                                          <Form.Control name='Ftphone' onChange={this.props.handleInputChange} placeholder={data.phone} />
                                      </Form.Group>
                                      <Form.Group as={Row} controlId="exampleForm.ControlInput4">
                                          <Form.Label>Location</Form.Label>
                                          <Form.Control name='Ftlocation' onChange={this.props.handleInputChange} placeholder={data.location} />
                                      </Form.Group>
                                      <Form.Group as={Row} controlId="exampleForm.ControlInput5">
                                          <Form.Label>Type</Form.Label>
                                          <Form.Control name='Fttype' onChange={this.props.handleInputChange} placeholder={data.type} />
                                      </Form.Group>
                                      <Form.Group as={Row} controlId="exampleForm.ControlInput4">
                                          <Form.Label>Time</Form.Label>
                                          <Form.Control name='Fttime' onChange={this.props.handleInputChange} placeholder={data.time} />
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

export default FtEditCard