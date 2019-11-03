import React from "react"
import {Table} from "react-bootstrap"
import FtDataItem from "./FtDataItem"
import {uid} from "react-uid"
import AddDataButton from "../AddDataButton/AddDataButton"

class FtDataList extends React.Component{
    render(){
        const {Fts, removeUser, admin, handleInputChange, initData, editData} = this.props

        removeUser.bind(admin)

        function rmUser(u){
            removeUser(u)
        }


        return(
        <div id="ftlist-container">
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
                            <AddDataButton 
                                dataType="ft"
                                btname="Add Food Truck"
                                handleInputChange={handleInputChange}
                                createData={this.props.createData}
                                addData={this.props.addData}
                            />
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {Fts.map((ft)=>{
                        return(
                            <FtDataItem 
                                key = {uid(ft)}
                                ft = {ft}
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

export default FtDataList