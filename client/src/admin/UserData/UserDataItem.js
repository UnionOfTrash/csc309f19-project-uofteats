import React from "react"
import {ButtonGroup} from "react-bootstrap"

import EditButton from "../EditButton/EditButton"
import DeleteButton from "../DeleteButton/DeleteButton"

// A entry for showing info of one user
class UserDataItem extends React.Component{

    render() {
        const {user, removeUser, handleInputChange, initData, editData} = this.props
        return(
            <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                    <img src={user.profileImg} alt="User" width="50" height="50" />
                </td>
                <td>
                    {/* The Edit button and Delete button */}
                    <ButtonGroup>
                        <EditButton
                                    data={user}
                                    dataType="user"
                                    handleInputChange={handleInputChange}
                                    initData={initData}
                                    editData={editData}
                        />
                        <DeleteButton
                                     data={user}
                                     dataType="user"
                                     removeUser = {removeUser}
                        />
                    </ButtonGroup>
                    
                </td>
            </tr>
        )
    }
}

export default UserDataItem