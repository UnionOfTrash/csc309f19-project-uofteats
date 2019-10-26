import React from "react"
import {Button, ButtonGroup, Modal} from "react-bootstrap"

import EditButton from "./Buttons/EditButton"
import DeleteButton from "./Buttons/DeleteButton"

class UserDataItem extends React.Component{

    render() {
        const {user} = this.props
        return(
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.img}</td>
                {/* Edit buttons */}
                <td>
                    <ButtonGroup>
                        <EditButton/> 
                        <DeleteButton/>
                    </ButtonGroup>
                    
                </td>
            </tr>
        )
    }
}

export default UserDataItem