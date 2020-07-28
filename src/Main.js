import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Landing from './contents/Landing';
import About from './contents/About';
import Education from './contents/Education';
import Experience from './contents/Experience';
import Projects from './contents/Projects';
import Contact from './contents/Contact';
import './index.css';


class Main extends Component {
    render() {
        return (
            <div id = "vantajs">   
                <HashRouter>
                    <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark" sticky = "top">
                        <Navbar.Brand>
                            <NavLink to = "/">Alex Feeley</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                        <Navbar.Collapse id = "responsive-navbar-nav">
                            <Nav className = "ml-auto">
                                <NavLink to = "/about">About</NavLink>
                                <NavLink to = "/education">Education</NavLink>
                                <NavLink to = "/experience">Experience</NavLink>
                                <NavLink to = "/projects">Projects</NavLink>
                                <NavLink to = "/contact">Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <div className="content">
                        <Route exact path = "/" component = { Landing }/>
                        <Route path = "/about" component = { About }/>
                        <Route path = "/education" component = { Education }/>
                        <Route path = "/experience" component = { Experience }/>
                        <Route path = "/projects" component = { Projects }/>
                        <Route path = "/contact" component = { Contact }/>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Main; 