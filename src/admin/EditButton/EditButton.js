import React from "react"
import Edit from "./Edit"


class EditButton extends React.Component{
    render() {
        return (
        <Edit 
            userdata={this.props.userdata}
            dataname={this.props.dataname}
            
          />)
    }
}
export default EditButton