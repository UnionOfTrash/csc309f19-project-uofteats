import React from "react"
import {Button} from "react-bootstrap"
import AddUserCard from "./AddUserCard"
import AddFtCard from "./AddFtCard"

// this will generate a card contains a form for add user/food truck
function AddDataCard(props){

    if (props.dataType === "u"){
        return(
            <AddUserCard 
                {...props}
            />
        )
    }else{
        return(
            <AddFtCard 
                {...props}
            />
        )
    }

}

// The AddData button and the pop up modal
class AddData extends React.Component{

    constructor(props){
        super(props)
        this.state={
            modalShow:false
        }
    }

    // show the pop up modal
    showModalShow(){
        this.props.createData()
        this.setState({modalShow:true})
    }

    // hide the pop up modal
    hideModlaShow(){
        this.setState({modalShow:false})
    }

    render(){
        return(
            <>
              <Button variant="secondary" onClick={() => this.showModalShow()}>
                {this.props.btname}
              </Button>

              <AddDataCard
                dataType={this.props.dataType}
                title={this.props.btname}
                show={this.state.modalShow}
                onHide={() => this.hideModlaShow()}
                handleInputChange={this.props.handleInputChange}
                addData={this.props.addData}
              />
            </>
        )
    }
}

export default AddData