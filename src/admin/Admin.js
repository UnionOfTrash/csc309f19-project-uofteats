import React from "react";

import HeaderBar from "../commons/HeaderBar";

import "./admin.css";
import Control from './Control';

class Admin extends React.Component{

    state = {
        Users:[
            {id:"0", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"../../public/truck1.png"},
            {id:"1", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"2", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"3", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"4", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"5", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"6", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"7", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"8", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"9", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"10", type:"u", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"}
        ],
        Fts:[
            {id:"0", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"../../public/truck1.png"},
            {id:"1", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"2", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"3", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"4", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"5", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"6", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"7", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"8", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"9", type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"10",type:"ft", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"}
        ]
    }


    addUser = (user) => {
        
    }

    removeUser = (user) => {
        if (user.type === "u"){
            const filteredUsers = this.state.Users.filter((u) => {
                return u !== user 
            })
    
            this.setState({
                Users: filteredUsers
            })
        }else{
            const filteredUsers = this.state.Fts.filter((u) => {
                return u !== user 
            })
    
            this.setState({
                Fts: filteredUsers
            })
        }
    }


    render() {

        return (
            <div id="admin-app">
                <HeaderBar title='UofT Eats Admin' username='admin1'/>
                <br/>
                <Control 
                    Users = {this.state.Users}
                    Fts = {this.state.Fts}
                    removeUser = {this.removeUser}
                    admin={this}
                />
            </div>
        )
    }
}

export default Admin;