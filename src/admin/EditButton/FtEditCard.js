import React from "react"
import {Card, Form, Row} from "react-bootstrap"

class FtEditCard extends React.Component{
    render(){
        const {data} = this.props
        return(
            <Card className="text-center">
                <Card.Header>Food Truck ID # {data.id}</Card.Header>
                    <Card.Body>
                        <Form>
                        <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label>Food Truck Name</Form.Label>
                                <Form.Control type="email" placeholder={data.name} />
                            </Form.Group>
                            <Form.Group as={Row} controlId="exampleForm.ControlInput2">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder={data.email} />
                            </Form.Group>
                            <Form.Group as={Row} controlId="exampleForm.ControlInput3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="email" placeholder={data.phone} />
                            </Form.Group>

                            {/* TODO: Add Edit Profile Picture feature later */}

                            {/* <Form.Group controlId="exampleForm.ControlInput4">
                                <Form.Label>User Image</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group> */}

                        </Form>
                    </Card.Body>
            </Card>
        )
    }
}

export default FtEditCard