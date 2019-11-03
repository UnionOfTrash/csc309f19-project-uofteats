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
                            handleInputChange={this.props.handleEditUserInputChange}
                            initData={this.props.initUser}
                            editData={this.props.EditUser}
                        />
                    </Tab>
                    <Tab eventKey="FtDataList" title="Food Truck Management">
                        <FtDataList
                            Fts = {Fts}
                            removeUser = {this.props.removeUser}
                            admin={admin}
                            handleInputChange={this.props.handleEditFtInputChange}
                            initData={this.props.initFt}
                            editData={this.props.EditFt}
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