import React from "react";
import "./admin.css";
import {Navbar} from 'react-bootstrap'

class Header extends React.Component{
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/admin">UofTEats Admin Board</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="/admin">{this.props.adminName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;