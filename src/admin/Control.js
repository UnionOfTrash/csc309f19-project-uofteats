import React from 'react'
import './admin.css'
import UserDataList from "./UserData/UserDataList"
import FtDataList from "./FTData/FtDataList"
import {Tab, Tabs} from 'react-bootstrap'

class Control extends React.Component{
    render() {
        const {Users, Fts, admin} = this.props
        return(
            <>
                <Tabs defaultActiveKey="UserDataList" id="tabs">
                    <Tab eventKey="UserDataList" title="User Management">
                        <UserDataList 
                            Users = {Users}
                            removeUser = {this.props.removeUser}
                            admin={admin}
                        />
                    </Tab>
                    <Tab eventKey="FtDataList" title="Food Truck Management">
                        <FtDataList
                            Fts = {Fts}
                            removeUser = {this.props.removeUser}
                            admin={admin}
                        />
                    </Tab>
                    <Tab eventKey="Search" title="Search">
                        <div id="search-container">
                            this is for search use
                        </div>
                    </Tab>
                </Tabs>
            </>
        )
    }
}

export default Control;