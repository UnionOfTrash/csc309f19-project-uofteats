import React from 'react';
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";

import userData from "../../Data/UserData";

class UserProfileMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: userData[0]
        }
    }

    render() {
        console.log("Food Page!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        return (
            <div>
                <ProfileImage image={this.state.selected.image} alt={this.state.selected.utorid}/>
                <UserInfo
                    utorid={this.state.selected.utorid}
                    name={this.state.selected.name}
                    phone={this.state.selected.phone}
                    email={this.state.selected.email}
                />
            </div>
        )
    }
}

export default UserProfileMain