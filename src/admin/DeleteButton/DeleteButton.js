import React from "react"
import Delete from "./Delete"



class DeleteButton extends React.Component{


  render() {
    const {userdata, dataname,removeUser} = this.props

    return (<Delete userdata={userdata}
                    dataname={dataname}
                    onDelete={()=>{
                      removeUser(userdata)}
                    }
            />
    )
  }
}
export default DeleteButton