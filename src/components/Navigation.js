import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import '../index.css';

class Navigation extends Component {
	render() {
		return (
            <React.Fragment>
                <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark" sticky = "top">
                    <Navbar.Brand href = "#landing">Alex Feeley</Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                    <Navbar.Collapse id = "responsive-navbar-nav">
                        <Nav className = "ml-auto">
                            <Nav.Link to = "/about">About</Nav.Link>
                            <Nav.Link to = "/education">Education</Nav.Link>
                            <Nav.Link to = "/experience">Experience</Nav.Link>
                            <Nav.Link to = "/projects">Projects</Nav.Link>
                            <Nav.Link to = "/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
		)
	}
}

export default Navigation;