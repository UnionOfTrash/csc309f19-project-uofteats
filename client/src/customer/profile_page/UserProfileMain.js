import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import "./UserProfile.css";
import userData from "../../data/UserData";
import CreditInfo from "./CreditInfo";
import BackButton from "./BackButton";
import HistoryButton from "./HistoryButton";

class UserProfileMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: userData[0]
    };
  }

  render() {
    return (
      <div>
        <ProfileImage
          imgUrl={this.state.selected.image}
          alt={this.state.selected.utorid}
        />
        <UserInfo
          utorid={this.state.selected.utorid}
          name={this.state.selected.name}
          phone={this.state.selected.phone}
          email={this.state.selected.email}
        />
        <CreditInfo creditScore={this.state.selected.creditScore} />
        <div id="buttons">
          <HistoryButton history={this.state.selected.history} />
          <BackButton />
        </div>
      </div>
    );
  }
}

export default UserProfileMain;
