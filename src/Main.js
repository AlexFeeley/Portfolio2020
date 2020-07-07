import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import {
//     BrowserRouter as Router,
//     Route
// } from "react-router-dom";

import Navigation from './components/Navigation';
import Landing from './contents/Landing.js';
import "./index.css";

class Main extends Component {
    // constructor() {
    //     super()
    //     this.vantaRef = React.createRef()
    // }
    // componentDidMount() {
    //     this.vantaEffect = BIRDS({
    //         el: this.vantaRef.current,
    //         mouseControls: true,
    //         touchControls: true,
    //         scale: 1.00,
    //         scaleMobile: 1.00,
    //         backgroundColor: 0x282828,
    //         color1: 0x350052,
    //         color2: 0x123c69,
    //         colorMode: "lerp",
    //         birdSize: 1.50,
    //         quantity: 3,
    //         separation: 15,
    //         cohesion: 50
    //     })
    // }
    // componentWillUnmount() {
    //     if (this.vantaEffect) this.vantaEffect.destroy()
    // }
    render() {
        return (
            <div id = "body">   
                <BrowserRouter>
                    <Navigation/>
                    <Landing/>
                </BrowserRouter>
            </div>
        );
    }
}

export default Main; 