import React from "react"
import {Table} from "react-bootstrap"
import FtDataItem from "./FtDataItem"
import {uid} from "react-uid"


class FtDataList extends React.Component{
    render(){
        const {Fts, removeUser, admin} = this.props

        removeUser.bind(admin)

        function rmUser(u){
            removeUser(u)
        }

        return(
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
                    <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {Fts.map((ft)=>{
                        return(
                            <FtDataItem 
                                key = {uid(ft)}
                                ft = {ft}
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

export default FtDataList