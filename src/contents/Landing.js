import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import BIRDS from 'vanta/dist/vanta.birds.min';
import { Jumbotron, Container, Button } from 'react-bootstrap';
// import About from './About'

class Landing extends Component {
    constructor(props) {
        super();
        this.vantaRef = React.createRef();
    }
    componentDidMount() {
        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            backgroundColor: 0x282828,
            color1: 0x350052,
            color2: 0x123c69,
            colorMode: "lerp",
            birdSize: 1.50,
            quantity: 3.5,
            separation: 15,
            cohesion: 50
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return (
            <Jumbotron fluid ref = {this.vantaRef}>
                <Container className = "align-content-center">
                    <h1 className = "lead">Hi, I'm</h1>
                    <h1 className = "display-3">Alex Feeley.</h1>
                    <h1 className = "lead">I'm a Junior at Vanderbilt studying Computer Engineering with a 
                        passion for creating cool things.</h1>
                    <p>
                        <Button onClick = {this.toggle}><Nav.Link to = "/about">Want to learn more?</Nav.Link></Button>
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default Landing; 