import React from "react";

class UserInfo extends React.Component {

    render() {
        return (
            <div>
                <h3>utorid: {this.props.utorid}</h3>
                <h3>Name: {this.props.name}</h3>
                <p>Phone: {this.props.phone}</p>
                <p>Email: {this.props.email}</p>
            </div>
        )
    }
}

export default UserInfo