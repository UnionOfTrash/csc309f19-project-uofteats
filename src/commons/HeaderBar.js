import React from "react";
import { Redirect } from "react-router-dom";

import "antd/dist/antd.css";
import "./commons.css";

import { Affix } from "antd";
import { PageHeader, Dropdown, Menu } from "antd";
import { Button } from "antd";


class HeaderBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            username: this.props.username,
            top: 0,
        };
    }

    handleMenuClick = (e) => {
        if (e.key === 'Profile') {
            console.log(e.key);
            return <Redirect to='/customer/profile_page/UserProfileMain' />
        }
    }

    userMenu = () => (
        <Menu>
            <Menu.Item key='Profile'>
                <Button type='link' href='/customer/profile_page/UserProfileMain' block> Profile </Button>
            </Menu.Item>
            <Menu.Item key='Logout'>
                <Button type='link' href='' block> Logout </Button>
            </Menu.Item>
        </Menu>
    );

    userBtn = () => (
        <Dropdown id='userBtn' overlay={ this.userMenu() } trigger={ ['click'] } >
            <Button type='link' size='large'> { this.state.username } </Button>
        </Dropdown>
    );

    render() {

        return (
            <Affix offsetTop={ this.state.top } >
                <PageHeader ghost={ false } title={ this.state.title } extra={ this.userBtn() } className='commonHeader' />
            </Affix>
        );
    }
}


export default HeaderBar;
