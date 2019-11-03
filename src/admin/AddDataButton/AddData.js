import React from "react"
import {Button} from "react-bootstrap"
import AddUserCard from "./AddUserCard"
import AddFtCard from "./AddFtCard"

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


class AddData extends React.Component{

    constructor(props){
        super(props)
        this.state={
            modalShow:false
        }
    }

    showModalShow(){
        this.props.createData()
        this.setState({modalShow:true})
    }

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