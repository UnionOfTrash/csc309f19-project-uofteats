import React from "react"
import {Modal, Button} from "react-bootstrap"
import UserEditCard from "./UserEditCard"
import FtEditCard from "./FtEditCard"

function EditCard(props){
    if (props.dataType === "user"){
        return(
            <UserEditCard 
                        data={props.data}
                        dataType={props.dataType}
            />
        )
    }else{
        return(
            <FtEditCard 
                    data={props.data}
                    dataType={props.dataType}
            />
        )
    }
}


class EditPopUpModal extends React.Component{
    
    render(){
        return (
            <Modal
              show={this.props.show}
              onHide={this.props.onHide}
              size="ls"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Edit {this.props.dataType}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <EditCard data={this.props.data}
                              dataType={this.props.dataType}/>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide} variant="success">Save</Button>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
        );
    }
}

  export default EditPopUpModal