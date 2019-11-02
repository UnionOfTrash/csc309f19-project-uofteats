import React from "react";

import "./App.css";

import { Button } from "antd";


class Home extends React.Component {
    render() {
        return (
            <div>
                <Button type='primary' href='/login'> Login Here </Button>
                <Button type='primary' href='/admin'> Admin Page</Button>
            </div>
        );
    }
}


export default Home;