import React from "react";
import HeaderBar from "../commons/HeaderBar";
import "./admin.css";
import Control from './Control';
import Login from "../commons/Login"

const log = console.log



// This is the main entrance when the user login to the Admin dashboard

class Admin extends React.Component{

    constructor(props){
        super(props)
        this.state={
            Users: [],
            Fts: [],
            result:{},
            nextFtid:0,
            EditFt:{},
            firstTimeLoad: true
        }
    }
    // 
        // props -> user:
        // _id, name, email, phone, profileImg
        // props -> ft:
        // _id, name, email, phone, location, profileImg
    // 
    
    componentWillMount(){
        this.getUsers()
        this.getFts()
    }

    getUsers = () => {
        const url = "/api/students"

        fetch(url).then((res) => {
            if (res.status === 200){
                return res.json()
            }else{
                return new Promise((resolve, reject) => {
                    reject("failed to fetch data")
                })
            }
        }).then((json) => {
            this.setState({
                Users:json
            })
        }).catch(e => {
            log(e)
            alert(e)
        })
    }

    getFts = () => {
        const url = "/api/admin/fts"

        fetch(url).then((res) => {
            if (res.status === 200){
                return res.json()
            }else{
                return new Promise((resolve, reject) => {
                    reject("failed to fetch data")
                })
            }
        }).then((json) => {
            log(json)
            this.setState({
                Fts:json
            })
        }).catch(e => {
            log(e) 
            alert(e)
        })
    }


    // a event handler whenever we type into a input box for the user
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

    // a event handler whenever we type into a input box for the food truck
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

    // //for initialize the user we want to edit
    // initUser=(user) => {
    //     this.setState({
    //         EditUser:user,
    //         Userid:user.id,
    //         Usertype:user.type,
    //         Username:user.name,
    //         Useremail:user.email,
    //         Userphone:user.phone,
    //         Userimg:user.img
    //     })
    // }

    //for initialize the food truck user we want to edit
    initFt=(ft) => {
        this.setState({
            EditFt:ft,
            Ftid:ft._id,
            Fttype:'ft',
            Ftname:ft.name,
            Ftemail:ft.email,
            Ftphone:ft.phone,
            Ftimg:ft.img
        })
    }

    // initializing data when we add a new user
    // createUser=()=>{
        
    //     this.setState({
    //         Userid:this.state.nextFtid,
    //         Usertype:"ft",
    //         Username:"",
    //         Useremail:"",
    //         Userphone:"",
    //         Userimg:"./user.png"
    //     })

    //     console.log(this.state)
    // }

    // initializing data when we add a new foodtruck
    createFt=()=>{
        this.setState({
            // Ftid:this.state.nextFtid,
            Fttype:"ft",
            Ftname:"",
            Ftemail:"",
            Ftphone:"",
            Ftlocation:"",
            Ftimg:"./truck1.png"
        })
    }


    // // method to add a new user
    // addUser = () => {
        
    //     const user = {
    //         id:this.state.nextUid,
    //         type:this.state.Usertype,
    //         name:this.state.Username,
    //         email:this.state.Useremail,
    //         phone:this.state.Userphone,
    //         img:this.state.Userimg
    //     }

    //     const users = this.state.Users

    //     users.push(user)

    //     const nextUid = this.state.nextUid + 1
    //     this.setState({
    //         Users:users,
    //         nextUid:nextUid
    //     })
    // }

    // method to add a new food truck
    addFt = () => {

        const ft = {
            type:this.state.Fttype,
            name:this.state.Ftname,
            email:this.state.Ftemail,
            phone:this.state.Ftphone,
            img:this.state.Ftimg
        }

        const fts = this.state.Fts

        fts.push(ft)

        this.setState({
            Fts:fts
        })
    }

    // method to edit a user
    EditUser= () => {

        const user = {
            _id:this.state.Userid,
            type:this.state.Usertype,
            name:this.state.Username,
            email:this.state.Useremail,
            phone:this.state.Userphone,
            img:this.state.Userimg
        }

        const users = this.state.Users
        let index;
        for (index=0; index < users.length; index++){
            if (users[index].name === user.name){
                break;
            }
        }

        users[index] = user
        
        this.setState({
            Users:users
        })

    }


    // method to edit a food truck
    EditFt= () => {

        const ft = {
            _id:this.state.Ftid,
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


    // method to remove a user/truck from the datalist
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
                {/* the Control contians 3 tabs for manage users, manage trucks, and search */}
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