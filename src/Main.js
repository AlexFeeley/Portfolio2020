import React, { Component } from "react";
import {
    Route, 
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                <h1>Alex Feeley</h1>
                    <ul className = "header">
                        <li><NavLink exact to = "/">Home</NavLink></li>
                        <li><NavLink to = "/about">About</NavLink></li>
                        <li><NavLink to = "/education">Education</NavLink></li>
                        <li><NavLink to = "/experience">Experience</NavLink></li>
                        <li><NavLink to = "/projects">Projects</NavLink></li>
                        <li><NavLink to = "/contact">Contact</NavLink></li>
                    </ul>
                    <div className = "content">
                        <Route exact path = "/" component = {Home}/>
                        <Route path = "/about" component = {About}/>
                        <Route path = "/education" component = {Education}/>
                        <Route path = "/experience" component = {Experience}/>
                        <Route path = "/projects" component = {Projects}/>
                        <Route path = "/contact" component = {Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main; 