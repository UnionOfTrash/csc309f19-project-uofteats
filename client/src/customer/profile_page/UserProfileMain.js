import React from "react";
import ProfileImage from "./ProfileImage.js";
import UserInfo from "./UserInfo.js";
import "./UserProfile.css";
import BackButton from "./BackButton.js";
import HistoryButton from "./HistoryButton.js";

class UserProfileMain extends React.Component {
    constructor() {
        super();
        this.loadData = this.loadData.bind(this);
        this.state = { user: {} };
    }

    async loadData() {
        const url = '/api/check-session';
        const res = await fetch(url);
        if (!res) {
            this.setState( {user: {} } );
            return;
        }
        const id = await res.text();
        if (!id) {
            this.setState({ user: {} });
            return;
        }
        const data = await fetch(`/api/users/${id}`);
        if (!data) {
            this.setState({ user: {} });
            return;
        }
        const json = await data.json();
        const user = {
            id: json._id,
            name: json.name,
            email: json.email,
            phone: json.phone,
            profileImg: json.profileImg
        };
        this.setState({ user });
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div>
                <ProfileImage
                    imgUrl={this.state.user.image}
                    alt={this.state.user.name}
                />
                <UserInfo
                    name={this.state.user.name}
                    phone={this.state.user.phone}
                    email={this.state.user.email}
                />
                <div id="buttons">
                    <HistoryButton customerId={this.state.user.id} />
                    <BackButton />
                </div>
            </div>
        );
    }
}

export default UserProfileMain;
