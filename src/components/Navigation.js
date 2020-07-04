import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import '../index.css';

class Navigation extends Component {
	render() {
		return (
            <React.Fragment>
                <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark" sticky = "top">
                    <Navbar.Brand href = "#home">Alex Feeley</Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                    <Navbar.Collapse id = "responsive-navbar-nav">
                        <Nav className = "ml-auto">
                            <Nav.Link href = "#about">About</Nav.Link>
                            <Nav.Link href = "#education">Education</Nav.Link>
                            <Nav.Link href = "#experience">Experience</Nav.Link>
                            <Nav.Link href = "#projects">Projects</Nav.Link>
                            <Nav.Link href = "#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
		)
	}
}

export default Navigation;