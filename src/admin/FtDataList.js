import React from "react"
import {Table} from "react-bootstrap"
import FtDataItem from "./FtDataItem"
import {uid} from "react-uid"
import "./admin.css"

class FtDataList extends React.Component{
    render(){
        const {Fts} = this.props
        return(
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
                    {Fts.map((ft)=>{
                        return(
                            <FtDataItem 
                                key = {uid(ft.id)}
                                ft = {ft}
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