import React from "react"
import {Table, Button} from "react-bootstrap"

import {uid} from "react-uid"
import UserDataItem from "./UserDataItem"

class UserDataList extends React.Component{
    render() {
        const {Users,removeUser, admin} = this.props

        removeUser.bind(admin)

        function rmUser(u){
            removeUser(u)
        }

        return (
        <>
            <div>
                <br></br>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Truck ID #</th>
                        <th>Truck Name</th>
                        <th>Contact Email</th>
                        <th>Phone #</th>
                        <th>Profile Image</th>
                        <th>
                            <Button variant="secondary">
                                Add New User
                            </Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((u) =>{
                        return(
                            <UserDataItem
                                key= {uid(u)}
                                user={u}
                                removeUser = {rmUser}
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