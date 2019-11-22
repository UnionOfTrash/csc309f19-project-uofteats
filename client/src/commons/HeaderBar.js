import React from "react";

import "antd/dist/antd.css";
import "./commons.css";

import { PageHeader, Dropdown, Menu } from "antd";
import { Button } from "antd";
import { Typography } from "antd";

const { Text } = Typography;


class HeaderBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            username: this.props.username,
        };
    }

    userMenu = () => (
        <Menu>
            <Menu.Item key='Profile'>
                <Button type='link' href='/customer/profile_page/UserProfileMain' block>
                    <Text strong> Profile </Text>
                </Button>
            </Menu.Item>
            <Menu.Item key='Logout'>
                <Button type='link' href='' block>
                    <Text strong> Logout </Text>
                </Button>
            </Menu.Item>
        </Menu>
    );

    userBtn = () => (
        <Dropdown overlay={ this.userMenu() } trigger={ ['click'] }>
            <Button type='ghost' size='large'> { this.state.username } </Button>
        </Dropdown>
    );

    render() {

        return (
            <PageHeader ghost={ false } title={ this.state.title } extra={ this.userBtn() } className='commonHeader' />
        );
    }
}


export default HeaderBar;