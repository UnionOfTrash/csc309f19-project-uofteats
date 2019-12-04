import React from "react";
import HeaderBar from "../commons/HeaderBar";
import "./admin.css";
import Control from './Control';

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
            timeOut: true
        }
    }
    
    componentWillMount(){
        this.getUsers();
        this.getFts();
    }

    getUsers = () => {
        const url = "/api/students";
        fetch(url).then((res) => {
            log(res.status);
            if (res.status === 200) {
                res.json().then((users) => {
                    this.setState({
                        Users: users,
                    })
                }, (e) => {
                    log(e);
                });
            } else {
                this.props.history.push('/');
            }
        }, (e) => {
            log(e);
        });
    }


    getFts = () => {
        const url = "/api/trucks"

        fetch(url).then((res) => {
            if (res.status === 200){
                return res.json()
            }else{
                return new Promise((resolve, reject) => {
                    reject("Time out")
                })
            }
        }).then((json) => {
            this.setState({
                Fts:json
            })
            return true
        }).catch(e => {
            log(e)
        })
    }

    // a event handler whenever we type into a input box for the user
    handleEditUserInputChange=(event)=>{

        const target = event.target
        const name = target.name
        let value = target.value

        if (!value){
            if(name==="Useremail"){
                value=this.state.EditUser.email
            }
            else if(name==="Userphone"){
                value=this.state.EditUser.phone
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
            if(name==="Ftemail"){
                value=this.state.EditFt.email
            }
            else if(name==="Ftphone"){
                value=this.state.EditFt.phone
            }else if(name==="Ftlocation"){
                value=this.state.EditFt.location
            }
            else if(name==="Fttime"){
                value=this.state.EditFt.time
            }
            else if(name==="Fttype"){
                value=this.state.EditFt.cuisine
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
            Userid:user._id,
            Usertype:"u",
            Username:user.name,
            Useremail:user.email,
            Userphone:user.phone,
            Userimg:user.profileImg
        })
    }

    //for initialize the food truck user we want to edit
    initFt=(ft) => {
        this.setState({
            EditFt:ft,
            Ftid:ft._id,
            Ftname:ft.name,
            Ftemail:ft.email,
            Ftphone:ft.phone,
            Ftlocation:ft.location,
            Fttype: ft.cuisine,
            Fttime: ft.time,
            Ftimg:ft.profileImg
        })
    }

    // initializing data when we add a new user
    createUser=()=>{
        
        this.setState({
            Username:"",
            Useremail:"",
            Userphone:"",
            Userimg:"./user.png"
        })
    }

    // initializing data when we add a new foodtruck
    createFt=()=>{
        this.setState({
            Ftname:"",
            Ftpassword: "123",
            Ftemail:"",
            Ftphone:"",
            Ftlocation:"",
            Fttype: "",
            Fttime: "",
            Ftimg:"./truck1.png"
        })
    }

    // method to add a new food truck
    addFt = () => {

        const url = "/api/truck"

        const data = {
            username:this.state.Ftname,
            password:this.state.Ftpassword,
            email:this.state.Ftemail,
            phone:this.state.Ftphone,
            location:this.state.Ftlocation,
            cuisine: this.state.Fttype,
            time: this.state.Fttime
        }

        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })

        // send request then fetch
        fetch(request).then((res) => {
            if (res.status === 200){
                alert("Success add a food truck")
                window.location.reload()
            }else{
                alert("fail to add a food truck")
            }
        }).catch(e => log(e))

    }

    // method to edit a user
    EditUser= () => {

        const url = "/api/student/" + this.state.Userid; 

        const data = {
            name:this.state.Username,
            phone:this.state.Userphone,
            email:this.state.Useremail
        }

        log(url)
        log(data)

        const request = new Request(url, {
            method:"PATCH",
            body:JSON.stringify(data),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })

        fetch(request).then((res) => {

            if (res.status === 200){
                alert("success to edit a user")
                window.location.reload()
            }else{
                alert("fail to edit a user")
            }
        }).catch(e => log(e))
    }

    // method to edit a food truck
    EditFt= () => {

        const url = "/api/truck/" + this.state.Ftid

        const ft = {
            name:this.state.Ftname,
            email:this.state.Ftemail,
            phone:this.state.Ftphone,
            location:this.state.Ftlocation,
            cuisine: this.state.Fttype,
            time: this.state.Fttime,
            profileImg:"./truck1.png"
        }

        const request = new Request(url, {
            method:"PATCH",
            body:JSON.stringify(ft),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })

        fetch(request).then(res => {
            if (res.status === 200){
                alert("Eidt food truck success")
                window.location.reload()
            }else{
                alert("Fail to edit food truck")
            }
        }, err => log(err)).catch(e => {log(e)})
    }


    // method to remove a user/truck from the datalist
    removeUser = (user) => {
        const url = "/api/student/" + user._id

        const request = new Request( url , {
            method: 'delete',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })

        fetch(request).then((res) => {
            if (res.status === 200){
                alert("delete success");
                window.location.reload()
            }else{
                alert("fail to delete");
            }
        }).catch(e => log(e))


    }

    removeFt = (ft) => {

        const url = "/api/truck/" + ft._id
        log(url)

        const request = new Request( url , {
            method:'delete',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })

        fetch(request).then((res) => {
            if (res.status === 200){
                alert("delete success");
                window.location.reload()
            }else{
                alert("fail to delete");
            }
        }).catch(e => log(e))


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
                    removeFt = {this.removeFt}
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