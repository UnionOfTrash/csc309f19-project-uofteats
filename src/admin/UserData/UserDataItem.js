import React from "react"
import {ButtonGroup} from "react-bootstrap"

import EditButton from "../EditButton/EditButton"
import DeleteButton from "../DeleteButton/DeleteButton"

class UserDataItem extends React.Component{

    render() {
        const {user, removeUser} = this.props
        return(
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.img}</td>
                <td>
                    <ButtonGroup>
                        <EditButton
                                    userdata={user}
                                    dataname="user data"
                        />
                        <DeleteButton
                                     userdata={user}
                                     dataname="user"
                                     removeUser = {removeUser}
                        />
                    </ButtonGroup>
                    
                </td>
            </tr>
        )
    }
}

export default UserDataItem