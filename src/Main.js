import React, { Component } from "react";
// import {
//     BrowserRouter as Router,
//     Route
// } from "react-router-dom";

// import BIRDS from './vanta/dist/vanta.birds.min';
import "./index.css";
import Navigation from './components/Navigation';

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
            <div>
                <Navigation></Navigation>
            </div>
        );
    }
}

export default Main; 