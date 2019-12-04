import React from "react";

import "antd/dist/antd.css";
import "./commons.css";

import { PageHeader, Dropdown, Menu } from "antd";
import { Button, message } from "antd";
import { Typography } from "antd";

const { Text } = Typography;

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      username: ""
    };
  }

  componentDidMount() {
    fetch("/api/check-session")
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(json => {
        if (json && json.username) {
          this.setState({
            username: json.username
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleLogoutBtnClick = e => {
    e.preventDefault();

    fetch("/api/logout").then(
      res => {
        if (res.status === 200) {
          message.success("Successfully logged out.");
          window.location.reload();
        } else {
          message.error("Something wrong, please try again later.");
        }
      },
      err => {
        console.log(err);
      }
    );
  };

  userMenu = () => (
    <Menu>
      <Menu.Item key="Profile">
        <Button type="link" href="/UserProfileMain" block>
          <Text strong> Profile </Text>
        </Button>
      </Menu.Item>
      <Menu.Item key="Logout">
        <Button type="link" href="" block onClick={this.handleLogoutBtnClick}>
          <Text strong> Logout </Text>
        </Button>
      </Menu.Item>
    </Menu>
  );

  userBtn = () => (
    <Dropdown overlay={this.userMenu()} trigger={["click"]}>
      <Button type="ghost" size="large">
        {" "}
        {this.state.username}{" "}
      </Button>
    </Dropdown>
  );

  render() {
    return (
      <PageHeader
        ghost={false}
        title={this.state.title}
        extra={this.userBtn()}
        className="commonHeader"
      />
    );
  }
}

export default HeaderBar;
