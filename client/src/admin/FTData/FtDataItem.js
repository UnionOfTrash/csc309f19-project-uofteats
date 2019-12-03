import React from "react"
import {ButtonGroup} from "react-bootstrap"
import EditButton from "../EditButton/EditButton"
import DeleteButton from "../DeleteButton/DeleteButton"

// A entry for showing info of one user
class FtDataItem extends React.Component{

    render() {
        const {ft, removeUser, handleInputChange, initData, editData} = this.props
        return(
            <tr>
                <td>{ft._id}</td>
                <td>{ft.name}</td>
                <td>{ft.email}</td>
                <td>{ft.phone}</td>
                <td>{ft.type}</td>
                <td>{ft.time}</td>
                <td>{ft.location}</td>
                <td><img src={ft.profileImg} alt="Food Truck" width="50" height="50" /></td>
                <td>
                    <ButtonGroup>
                        {/* Edit button and Delete button */}
                        <EditButton data={ft}
                                    dataType="food truck"
                                    handleInputChange={handleInputChange}
                                    initData={initData}
                                    editData={editData}
                                    /> 
                        <DeleteButton data={ft}
                                      dataType="food truck"
                                      removeUser = {removeUser}/>
                    </ButtonGroup>
                </td>
            </tr>
        )
    }
}

export default FtDataItem