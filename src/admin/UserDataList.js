import React from "react"
import {Table} from "react-bootstrap"

import {uid} from "react-uid"
import UserDataItem from "./UserDataItem"

class UserDataList extends React.Component{
    render() {
        const {Users} = this.props
        return (
        <>
            <div>
                <br></br>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Truck ID #</th>
                        <th>Truck Name</th>
                        <th>Contact Email</th>
                        <th>Phone #</th>
                        <th>Profile Image</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((u) =>{
                        return(
                            <UserDataItem
                                key= {uid(u.id)}
                                user={u}
                            />
                        )
                    })}
                </tbody>
            </Table>
        </>
        )
    }
}

export default UserDataList;