import React from "react"
import {Modal, Button, Dropdown, ButtonGroup} from "react-bootstrap"

import EditButton from "./Buttons/EditButton"
import DeleteButton from "./Buttons/DeleteButton"

class FtDataItem extends React.Component{

    render() {
        const {ft} = this.props
        return(
            <tr>
                <td>{ft.id}</td>
                <td>{ft.name}</td>
                <td>{ft.email}</td>
                <td>{ft.phone}</td>
                <td>{ft.img}</td>
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

export default FtDataItem