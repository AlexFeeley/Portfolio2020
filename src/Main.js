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
// import Projects from './contents/Projects';
import Publications from './contents/Publications';
import './index.css';


class Main extends Component {
    render() {
        return (
            <div>   
                <HashRouter>
                    <Navbar collapseOnSelect expand = "md" sticky = "top" className = "nav-bar">
                        <Navbar.Brand>
                            <NavLink to = "/" className = "nav-link">Alex Feeley</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
                        <Navbar.Collapse id = "responsive-navbar-nav">
                            <Nav className = "ml-auto">
                                <NavLink to = "/about" className = "nav-link">About</NavLink>
                                <NavLink to = "/education" className = "nav-link">Education</NavLink>
                                <NavLink to = "/experience" className = "nav-link">Experience</NavLink>
                                <NavLink to = "/publications" className = "nav-link">Publications</NavLink>
                                {/* <NavLink to = "/projects" className = "nav-link">Projects</NavLink> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <div className = "content">
                        <Route exact path = "/" 
                            render = {(props) => (
                                <Landing {...props} isAuthed = { true }/>
                            )}
                        />
                        <Route path = "/about" component = { About }/>
                        <Route path = "/education" component = { Education }/>
                        <Route path = "/experience" component = { Experience }/>
                        <Route path = "/publications" component = { Publications }/>
                        {/* <Route path = "/projects" component = { Projects }/> */}
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default Main; 