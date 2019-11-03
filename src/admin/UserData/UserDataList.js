import React from "react"
import {Table} from "react-bootstrap"

import {uid} from "react-uid"
import UserDataItem from "./UserDataItem"
import AddDataButton from "../AddDataButton/AddDataButton"

class UserDataList extends React.Component{
    render() {
        const {Users,removeUser, admin, handleInputChange, initData, editData} = this.props

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
                        <th>User ID #</th>
                        <th>User Name</th>
                        <th>Contact Email</th>
                        <th>Phone #</th>
                        <th>Profile Image</th>
                        <th>
                            <AddDataButton variant="secondary" 
                                dataType = "u"
                                btname="Add New User"
                                handleInputChange={handleInputChange}
                                createData={this.props.createData}
                                addData={this.props.addData}
                            />
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
                                handleInputChange={handleInputChange}
                                initData={initData}
                                editData={editData}
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