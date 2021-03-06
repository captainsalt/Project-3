import React, { Component } from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavbarBS extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">ArtFair</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="/signup">Sign Up</NavItem>
                        <NavItem href="/login">Login</NavItem>
                        <NavItem href="/discover">Discover</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}