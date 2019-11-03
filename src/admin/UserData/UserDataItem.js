import React from "react"
import {ButtonGroup} from "react-bootstrap"

import EditButton from "../EditButton/EditButton"
import DeleteButton from "../DeleteButton/DeleteButton"

class UserDataItem extends React.Component{

    render() {
        const {user, removeUser, handleInputChange, initData, editData} = this.props
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