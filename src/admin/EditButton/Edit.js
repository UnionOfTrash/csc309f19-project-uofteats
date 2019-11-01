import React from "react"
import EditPopUpModal from "./EditPopUpModal"
import {Button} from "react-bootstrap"


class Edit extends React.Component{

    constructor(props){
        super(props)
        this.state={
            modalShow:false
        }
    }

    showModalShow(){
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
              <EditPopUpModal
                userdata={this.props.userdata}
                dataname={this.props.dataname}
                show={this.state.modalShow}
                onHide={() => this.hideModlaShow()}
              />
            </>
        );
    }

}

export default Edit