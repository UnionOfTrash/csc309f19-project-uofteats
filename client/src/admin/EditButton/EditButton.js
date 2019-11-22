import React from "react"
import Edit from "./Edit"


class EditButton extends React.Component{
    render() {
        return (
        <Edit 
            data={this.props.data}
            dataType={this.props.dataType}
            handleInputChange={this.props.handleInputChange}
            initData={this.props.initData}
            editData={this.props.editData}
          />)
    }
}
export default EditButton