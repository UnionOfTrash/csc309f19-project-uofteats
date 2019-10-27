import React from "react"
import {Card} from "react-bootstrap"

class EditUserDataCard extends React.Component{
    render() {
        const {user} = this.props
        return (
            <Card className="text-center">
                <Card.Header>User ID # {user.id}</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                {/* <Card.Footer className="text-muted">User Id: {user.id}</Card.Footer> */}
            </Card>
        )
    }
}

export default EditUserDataCard