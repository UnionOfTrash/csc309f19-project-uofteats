import React from "react"
import "../admin.css"
import {Alert, Container, Col, Row, Form, FormControl, Button} from "react-bootstrap"
import UserInfoCard from "./UserInfoCard"
import FtInfoCard from "./FtInfoCard"

// this will generate a popup modal for showing the info from the searching result
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


// The Search layout for the Search tab
class Search extends React.Component{

    // initialize states
    constructor(props){
        super(props)
        this.state={
            choice:"User",
            name:"",
            result:{},
            noResultShow:false,
            invalidInputShow:false,
            resultShow:false
        }
    }

    // this will set a content to show or unshow
    setShow=(name, value)=>{
        this.setState({
            [name]:value
        })
    }
    
    // hide the No Result Alert
    hideNoResultShow=()=>{
        this.setState({
            noResultShow:false
        })
    }

    // hide the Invalid Input Alert
    hideInvalidInputShow=()=>{
        this.setState({
            invalidInputShow:false
        })
    }

    // unshow the result
    hideResultShow=()=>{
        this.setState({
            resultShow:false
        })
    }

    // handle the input
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

    searchName = () => {
        if (this.state.name.length === 0){
            this.setShow("invalidInputShow", true)
            return;
        }   

        let result = -1;

        if (this.state.choice === "User"){
            const users = this.props.Users
            for (let i = 0; i < users.length; i++){
                if (users[i].name === this.state.name){
                    result = users[i]
                    break;
                }
            }
        }else{
            const fts = this.props.Fts
            for (let i = 0; i < fts.length; i++){
                if (fts[i].name === this.state.name){
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
                            <FormControl id="search-input" onChange={this.handleInput} name="name" placeholder={(this.state.choice==="User")? "User name":"Food Truck name"} className=" mr-sm-2" />
                            <>
                                <Button id="search-btn" onClick={this.searchName}>
                                    Search
                                </Button>
                                
                                {/* the pop up modal to show the result */}
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
                                    removeFt = {this.props.removeFt}
                                />
                            </>
                        </Form>
                    </Row>
                    <br></br>

                    {/* Some Alerts for invalid inputs */}
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