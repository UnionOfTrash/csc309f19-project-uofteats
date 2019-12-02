import React from "react"
import {Table} from "react-bootstrap"
import {uid} from "react-uid"
import UserDataItem from "./UserDataItem"
// import AddDataButton from "../AddDataButton/AddDataButton"

// A table contains all users
class UserDataList extends React.Component{
    render() {
        const {Users,removeUser, admin, handleInputChange, initData, editData} = this.props

        removeUser.bind(admin)

        function rmUser(u){
            removeUser(u)
        }

        return (
        <div id="userlist-container">
            <div>
                <br></br>
            </div>
            {/* The head of the table */}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>User ID #</th>
                        <th>User Name</th>
                        <th>Contact Email</th>
                        <th>Phone #</th>
                        <th>Profile Image</th>
                        <th>
                            Control
                            {/* <AddDataButton variant="secondary" 
                                dataType = "u"
                                btname="Add New User"
                                handleInputChange={handleInputChange}
                                createData={this.props.createData}
                                addData={this.props.addData}
                            /> */}
                        </th>
                    </tr>
                </thead>

                {/* the users of the table */}
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
        </div>
        )
    }
}

export default UserDataList;