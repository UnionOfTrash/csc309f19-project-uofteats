import React from "react"
import Delete from "./Delete"



class DeleteButton extends React.Component{


  render() {
    const {data, dataType,removeUser} = this.props

    return (<Delete data={data}
                    dataType={dataType}
                    onDelete={()=>{
                      removeUser(data)}
                    }
            />
    )
  }
}
export default DeleteButton