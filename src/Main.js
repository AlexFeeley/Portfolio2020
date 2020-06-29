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

import BIRDS from 'vanta/dist/vanta.birds.min';

class Main extends Component {
    constructor() {
        super()
        this.vantaRef = React.createRef()
    }
    componentDidMount() {
        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x282828,
            color1: 0x350052,
            color2: 0x123c69,
            colorMode: "lerp",
            birdSize: 1.50,
            quantity: 3,
            separation: 15,
            cohesion: 50
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return (
            <HashRouter>
                <div id = "vantajs" ref = {this.vantaRef}>
                    <h1>Alex Feeley</h1>
                    <ul className = "header">
                        {/* <li><NavLink exact to = "/">Home</NavLink></li> */}
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