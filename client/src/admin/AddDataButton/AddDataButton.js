import React from "react"
import AddData from "./AddData"

// the Add Data button 
class AddDataButton extends React.Component{
    render(){
        return(
            <AddData 
                dataType={this.props.dataType}
                btname={this.props.btname}
                createData={this.props.createData}
                handleInputChange={this.props.handleInputChange}
                addData={this.props.addData}
            />
        )
    }
}

export default AddDataButton