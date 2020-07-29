import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import HALO from 'vanta/dist/vanta.halo.min';
import { Container, Button } from 'react-bootstrap';
import About from './About';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.vantaRef = React.createRef();
    }
    componentDidMount() {
        this.vantaEffect = HALO({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            baseColor: 0x333f63,
            backgroundColor: 0x838bc2,
            size: 1.25,
            amplitudeFactor: 1.50
        })
    }
    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }
    render() {
        return (
            <Container fluid ref = {this.vantaRef}>
                <Container className = "align-content-center">
                    <h1 className = "lead">Hi, I'm</h1>
                    <h1 className = "display-3">Alex Feeley.</h1>
                    <h1 className = "lead">I'm a Junior at Vanderbilt studying Computer Engineering 
                    with a passion for creating cool stuff.</h1>
                    <Button><NavLink to = "/about" className = "button-link">Want to learn more?</NavLink></Button>
                </Container>

                <Route path = "/about" component = { About }/>
            </Container>
        );
    }
}

export default Landing; 