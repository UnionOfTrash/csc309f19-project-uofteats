import React from "react"
import {Button} from "react-bootstrap"
import UserEditCard from "./UserEditCard"
import FtEditCard from "./FtEditCard"

function EditCard(props){
    if (props.dataType === "user"){
        return(
            <UserEditCard 
                        {...props}
                        data={props.data}
                        dataType={props.dataType}
            />
        )
    }else{
        return(
            <FtEditCard 
                    {...props}
                    data={props.data}
                    dataType={props.dataType}
            />
        )
    }
}


class Edit extends React.Component{

    constructor(props){
        super(props)
        this.state={
            modalShow:false
        }
    }

    showModalShow(){
        this.props.initData(this.props.data)
        this.setState({modalShow:true})
    }

    hideModlaShow(){
        this.setState({modalShow:false})
    }


    render() {
        return (
            <>
              <Button variant="success" onClick={() => this.showModalShow()}>
                Edit Data
              </Button>

              <EditCard
                data={this.props.data}
                dataType={this.props.dataType}
                show={this.state.modalShow}
                onHide={() => this.hideModlaShow()}
                handleInputChange={this.props.handleInputChange}
                editData={this.props.editData}
              />
            </>
        );
    }

}

export default Edit