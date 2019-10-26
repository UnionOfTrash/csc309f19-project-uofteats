import React from 'react'
import './admin.css'
import UserDataList from "./UserDataList"
import FtDataList from "./FtDataList"
import {Tab, Tabs} from 'react-bootstrap'

class Control extends React.Component{
    render() {
        const {Users, Fts} = this.props
        return(
            <>
                <Tabs defaultActiveKey="UserDataList" id="tabs">
                    <Tab eventKey="UserDataList" title="User Management">
                        <UserDataList 
                            Users = {Users}
                        />
                    </Tab>
                    <Tab eventKey="FtDataList" title="Food Truck Management">
                        <FtDataList
                            Fts = {Fts}
                        />
                    </Tab>
                    <Tab eventKey="Search" title="Search">
                        This tab is for Search
                    </Tab>
                </Tabs>
            </>
        )
    }
}

export default Control;