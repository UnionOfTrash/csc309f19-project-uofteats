import React from "react";

import HeaderBar from "../commons/HeaderBar";

import "./admin.css";
import Control from './Control';

class Admin extends React.Component{


    // some hard coded data for test use, this will be get from the server at phase 2
    state = {
        Users:[
            {id:"0", type:"u", name:"User1", email:"User1@csgo.com", phone:"8888-8888", img:"../../public/truck1.png"},
            {id:"1", type:"u", name:"User2", email:"User2@csgo.com", phone:"8888-8888", img:"www"},
            {id:"2", type:"u", name:"User3", email:"User3@csgo.com", phone:"8888-8888", img:"www"},
            {id:"3", type:"u", name:"User4", email:"User4@csgo.com", phone:"8888-8888", img:"www"},
            {id:"4", type:"u", name:"User5", email:"User5@csgo.com", phone:"8888-8888", img:"www"},
            {id:"5", type:"u", name:"User6", email:"User6@csgo.com", phone:"8888-8888", img:"www"},
            {id:"6", type:"u", name:"User7", email:"User7@csgo.com", phone:"8888-8888", img:"www"},
            {id:"7", type:"u", name:"User8", email:"User8@csgo.com", phone:"8888-8888", img:"www"},
            {id:"8", type:"u", name:"User9", email:"User9@csgo.com", phone:"8888-8888", img:"www"},
            {id:"9", type:"u", name:"User10", email:"User10@csgo.com", phone:"8888-8888", img:"www"},
            {id:"10", type:"u", name:"User11", email:"User11@csgo.com", phone:"8888-8888", img:"www"}
        ],
        Fts:[
            {id:"0", type:"ft", name:"Ft", email:"Ft@lol.com", phone:"8888-8888", img:"../../public/truck1.png"},
            {id:"1", type:"ft", name:"Ft1", email:"Ft1@lol.com", phone:"8888-8888", img:"www"},
            {id:"2", type:"ft", name:"Ft2", email:"Ft2@lol.com", phone:"8888-8888", img:"www"},
            {id:"3", type:"ft", name:"Ft3", email:"Ft3@lol.com", phone:"8888-8888", img:"www"},
            {id:"4", type:"ft", name:"Ft4", email:"Ft4@lol.com", phone:"8888-8888", img:"www"},
            {id:"5", type:"ft", name:"Ft5", email:"Ft5@lol.com", phone:"8888-8888", img:"www"},
            {id:"6", type:"ft", name:"Ft6", email:"Ft6@lol.com", phone:"8888-8888", img:"www"},
            {id:"7", type:"ft", name:"Ft7", email:"Ft7@lol.com", phone:"8888-8888", img:"www"},
            {id:"8", type:"ft", name:"Ft8", email:"Ft8@lol.com", phone:"8888-8888", img:"www"},
            {id:"9", type:"ft", name:"Ft9", email:"Ft9@lol.com", phone:"8888-8888", img:"www"},
            {id:"10",type:"ft", name:"Ft10", email:"Ft10@lol.com", phone:"8888-8888", img:"www"}
        ],
        nextUid:11,
        nextFtid:11,
        EditUser:{},
        EditFt:{}

    }


    // a generic event handler whenever we type into a input box for the user
    handleEditUserInputChange=(event)=>{

        const target = event.target
        const name = target.name
        let value = target.value

        if (!value){
            if (name==="Username"){
                value=this.state.EditUser.name
            }else if(name==="Useremail"){
                value=this.state.EditUser.email
            }
            else if(name==="Userphone"){
                value=this.state.EditUser.email
            }
        }
        this.setState({
            [name]:value
        })

    }

    handleEditFtInputChange=(event)=>{

        const target = event.target
        const name = target.name
        let value = target.value
        if (!value){
            if (name==="Ftname"){
                value=this.state.EditFt.name
            }else if(name==="Ftemail"){
                value=this.state.EditFt.email
            }
            else if(name==="Ftphone"){
                value=this.state.EditFt.phone
            }
        }
        this.setState({
            [name]:value
        })
    }

    //for initialize the user we want to edit

    initUser=(user) => {
        this.setState({
            EditUser:user,
            Userid:user.id,
            Usertype:user.type,
            Username:user.name,
            Useremail:user.email,
            Userphone:user.phone,
            Userimg:user.img
        })
    }

    //for initialize the food truck user we want to edit

    initFt=(ft) => {
        this.setState({
            EditFt:ft,
            Ftid:ft.id,
            Fttype:ft.type,
            Ftname:ft.name,
            Ftemail:ft.email,
            Ftphone:ft.phone,
            Ftimg:ft.img
        })
    }

    // initializing data when we add a new user
    createUser=()=>{
        
        this.setState({
            Userid:this.state.nextFtid,
            Usertype:"ft",
            Username:"",
            Useremail:"",
            Userphone:"",
            Userimg:""
        })

        console.log(this.state)
    }

    createFt=()=>{
        this.setState({
            Ftid:this.state.nextFtid,
            Fttype:"ft",
            Ftname:"",
            Ftemail:"",
            Ftphone:"",
            Ftimg:""
        })
    }


    // method to add a new user
    addUser = () => {
        
        const user = {
            id:this.state.nextUid,
            type:this.state.Usertype,
            name:this.state.Username,
            email:this.state.Useremail,
            phone:this.state.Userphone,
            img:this.state.Userimg
        }

        const users = this.state.Users

        users.push(user)

        const nextUid = this.state.nextUid + 1
        this.setState({
            Users:users,
            nextUid:nextUid
        })
    }

    addFt = () => {
        
        const ft = {
            id:this.state.nextFtid,
            type:this.state.Fttype,
            name:this.state.Ftname,
            email:this.state.Ftemail,
            phone:this.state.Ftphone,
            img:this.state.Ftimg
        }

        const fts = this.state.Fts

        fts.push(ft)

        const nextFid = this.state.nextFtid + 1
        this.setState({
            Fts:fts,
            nextUid:nextFid
        })
    }

    // method to edit a user
    EditUser= () => {

        const user = {
            id:this.state.Userid,
            type:this.state.Usertype,
            name:this.state.Username,
            email:this.state.Useremail,
            phone:this.state.Userphone,
            img:this.state.Userimg
        }

        const users = this.state.Users
        let index;
        for (index=0; index < users.length; index++){
            if (users[index].id === user.id){
                break;
            }
        }

        users[index] = user
        
        this.setState({
            Users:users
        })

    }


    EditFt= () => {

        const ft = {
            id:this.state.Ftid,
            type:this.state.Fttype,
            name:this.state.Ftname,
            email:this.state.Ftemail,
            phone:this.state.Ftphone,
            img:this.state.Ftimg
        }

        const fts = this.state.Fts
        let index;
        for (index=0; index < fts.length; index++){
            if (fts[index].id === ft.id){
                break;
            }
        }
        console.log(index)
        console.log(fts)

        fts[index] = ft
        
        this.setState({
            Fts:fts
        })
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
                    handleEditFtInputChange={this.handleEditFtInputChange}
                    handleEditUserInputChange={this.handleEditUserInputChange}
                    initUser={this.initUser}
                    initFt={this.initFt}
                    EditUser={this.EditUser}
                    EditFt={this.EditFt}
                    createUser={this.createUser}
                    createFt={this.createFt}
                    addUser={this.addUser}
                    addFt={this.addFt}
                />
            </div>
        )
    }
}

export default Admin;