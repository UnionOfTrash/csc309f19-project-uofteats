import React from "react";

import HeaderBar from "../commons/HeaderBar";

import "./admin.css";
import Control from './Control';

class Admin extends React.Component{

    state = {
        Users:[
            {id:"0", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"../../public/truck1.png"},
            {id:"1", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"2", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"3", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"4", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"5", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"6", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"7", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"8", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"9", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"10", name:"WDNMD", email:"WDNMD@csgo.com", phone:"8888-8888", img:"www"}
        ],
        Fts:[
            {id:"0", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"../../public/truck1.png"},
            {id:"1", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"2", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"3", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"4", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"5", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"6", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"7", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"8", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"9", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"},
            {id:"10", name:"Ftnmd", email:"FTNMD@csgo.com", phone:"8888-8888", img:"www"}
        ]
    }



    render() {

        return (
            <div id="admin-app">
                <HeaderBar title='UofT Eats Admin' username='admin1' />
                <br/>
                <Control 
                    Users = {this.state.Users}
                    Fts = {this.state.Fts}
                />
            </div>
        )
    }
}

export default Admin;