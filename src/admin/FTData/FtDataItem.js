import React from "react"
import {ButtonGroup} from "react-bootstrap"

import EditButton from "../EditButton/EditButton"
import DeleteButton from "../DeleteButton/DeleteButton"

class FtDataItem extends React.Component{

    render() {
        const {ft, removeUser} = this.props
        return(
            <tr>
                <td>{ft.id}</td>
                <td>{ft.name}</td>
                <td>{ft.email}</td>
                <td>{ft.phone}</td>
                <td>{ft.img}</td>
                <td>
                    <ButtonGroup>
                        <EditButton data={ft}
                                    dataType="food truck"/> 
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