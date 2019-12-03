import React from 'react'
import './admin.css'
import UserDataList from "./UserData/UserDataList"
import FtDataList from "./FTData/FtDataList"
import {Tab, Tabs} from 'react-bootstrap'
import Search from "./Search/Search"

// the main conponent for the admin dashboard, contains 3 tabs: manage Users, manage Food Trucks, and Search
class Control extends React.Component{
    render() {
        const {Users, Fts, admin} = this.props
        return(
            <>
                {/* The tab for User management */}
                <Tabs defaultActiveKey="UserDataList" id="tabs">
                    <Tab eventKey="UserDataList" title="User Management">
                        <UserDataList 
                            Users = {Users}
                            removeUser = {this.props.removeUser}
                            admin={admin}
                            handleInputChange={this.props.handleEditUserInputChange}
                            initData={this.props.initUser}
                            editData={this.props.EditUser}
                            createData={this.props.createUser}
                            addData={this.props.addUser}
                        />
                    </Tab>

                    {/* The tab for Food Truck Management */}
                    <Tab eventKey="FtDataList" title="Food Truck Management">
                        <FtDataList
                            Fts = {Fts}
                            removeUser = {this.props.removeFt}
                            admin={admin}
                            handleInputChange={this.props.handleEditFtInputChange}
                            initData={this.props.initFt}
                            editData={this.props.EditFt}
                            createData={this.props.createFt}
                            addData={this.props.addFt}
                        />
                    </Tab>

                    {/* The tab for Search a User/FoodTruck */}
                    <Tab eventKey="Search" title="Search">
                        <Search
                            Fts={Fts}
                            Users={Users}
                            initUser={this.props.initUser}
                            editUser={this.props.EditUser}
                            initFt={this.props.initFt}
                            editFt={this.props.EditFt}
                            handleEditFtInputChange={this.props.handleEditFtInputChange}
                            handleEditUserInputChange={this.props.handleEditUserInputChange}
                            removeUser = {this.props.removeUser}
                            removeFt = {this.props.removeFt}
                        />
                    </Tab>
                </Tabs>
            </>
        )
    }
}

export default Control;