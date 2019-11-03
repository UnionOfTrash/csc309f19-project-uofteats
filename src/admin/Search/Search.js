import React from "react"
import "../admin.css"
import {Alert, Container, Col, Row, Form, FormControl, Button} from "react-bootstrap"

import UserInfoCard from "./UserInfoCard"
import FtInfoCard from "./FtInfoCard"

function InfoCard(props){
    if (props.choice === "User"){
        return(
            <UserInfoCard 
                        {...props}
                        editData={props.editUser}
                        data={props.data}
                        handleInputChange={props.handleEditUserInputChange}
            />
        )
    }else{
        return(
            <FtInfoCard 
                    {...props}
                    editData={props.editFt}
                    data={props.data}
                    handleInputChange={props.handleEditFtInputChange}
            />
        )
    }
}



class Search extends React.Component{

    constructor(props){
        super(props)
        this.state={
            choice:"User",
            id:-1,
            result:{},
            noResultShow:false,
            invalidInputShow:false,
            resultShow:false
        }
    }

    setShow=(name, value)=>{
        this.setState({
            [name]:value
        })
    }
    
    hideNoResultShow=()=>{
        this.setState({
            noResultShow:false
        })
    }

    hideInvalidInputShow=()=>{
        this.setState({
            invalidInputShow:false
        })
    }

    hideResultShow=()=>{
        this.setState({
            resultShow:false
        })
    }

    handleInput=(e)=>{
        const target = e.target
        const name = target.name
        let value = target.value

        this.setState({
            noResultShow:false,
            invalidInputShow:false
        })

        if (name === "id" && value === ""){
            value = -1
        }

        setTimeout(() => {
            this.setState({
                [name]:value
            })
        }, 200);
    }

    searchId=()=>{

        if(this.state.id < 0){
            this.setShow("invalidInputShow", true)
            return;
        }

        let result=-1;
        if (this.state.choice === "User"){
            const users = this.props.Users
            for (let i = 0; i < users.length; i++){
                if (users[i].id === this.state.id){
                    result = users[i]
                    break;
                }
            }
        }else{
            const fts = this.props.Fts
            for (let i = 0; i < fts.length; i++){
                if (fts[i].id === this.state.id){
                    result = fts[i]
                    break;
                }
            }
        }

        if (result === -1){
            this.setShow("noResultShow", true)
        }else{
            this.setState({
                result:result
            })

            if(this.state.choice === "User"){
                this.props.initUser(result)
            }else{
                this.props.initFt(result)
            }
            this.setShow("resultShow", true)
        }

    }


    render(){
        return(
            <div id="search-container">
                <Container >
                    
                    <Row className="justify-content-md-center">
                        <h1 className="search-title"> <strong> Search </strong></h1>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Form inline className="select-form">
                            <Form.Control onChange={this.handleInput} name="choice" as="select">
                                    <option>User</option>
                                    <option>Food Truck</option>
                            </Form.Control>
                        </Form>
                        <Form inline>
                            <FormControl id="search-input" onChange={this.handleInput} name="id" type="number" placeholder={(this.state.choice==="User")? "User id":"Food Truck Id"} className=" mr-sm-2" />
                            <>
                                <Button id="search-btn" onClick={this.searchId}>
                                    Search
                                </Button>

                                <InfoCard
                                    data={this.state.result}
                                    choice={this.state.choice}
                                    show={this.state.resultShow}
                                    onHide={this.hideResultShow}
                                    editUser={this.props.editUser}
                                    editFt={this.props.editFt}
                                    handleEditUserInputChange={this.props.handleEditUserInputChange}
                                    handleEditFtInputChange={this.props.handleEditFtInputChange}
                                    removeUser = {this.props.removeUser}
                                />
                            </>
                        </Form>
                    </Row>
                    <br></br>
                    <Row className="justify-content-md-center">
                        <Col xs={12}>
                            <Alert show={this.state.noResultShow} variant="danger" onClose={this.hideNoResultShow} dismissible>
                                <Alert.Heading>Cannot find the given {this.state.choice} !</Alert.Heading>
                                <p>
                                Please double check the Id of the given {this.state.choice} !
                                </p>
                            </Alert>

                            <Alert show={this.state.invalidInputShow} variant="danger" onClose={this.hideInvalidInputShow} dismissible>
                                <Alert.Heading>Invalid {this.state.choice} Id !</Alert.Heading>
                                <p>
                                    Please give the correct input for the {this.state.choice}'s id!
                                </p>
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Search