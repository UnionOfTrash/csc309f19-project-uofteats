import React from "react"
import DeletePopUpModal from "./DeletePopUpModal"

import {Button} from "react-bootstrap"


  class Delete extends React.Component{

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

    render(){
        return (
            <>
              <Button variant="danger" onClick={()=>this.showModalShow()}>
                  Delete
              </Button>
              <DeletePopUpModal
                  dataname={this.props.dataname}
                  userdata={this.props.userdata}
                  show={this.state.modalShow}
                  onHide={() => this.hideModlaShow()}
                  onDelete={this.props.onDelete}
              />
            </>
          );
    }
  }

  export default Delete