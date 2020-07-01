import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends Component {
	render() {
		return (
            <React.Fragment>
                <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark">
                    <Navbar.Brand href = "#home">Alex Feeley</Navbar.Brand>
                    <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                    <Navbar.Collapse id = "responsive-navbar-nav">
                        <Nav className = "mr-auto">
                        <Nav.Link href = "#about">About</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </React.Fragment>
		)
	}
}

export default Navigation;