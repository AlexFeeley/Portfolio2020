import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import About from './About';

class Landing extends Component {
    
     render() {
         return (
            <Container>
                <Container className = "landing">
                    <h1 className = "lead">Hi, I'm</h1>
                    <h1 className = "display-3">Alex Feeley.</h1>
                    <h1 className = "lead">I'm a Hardware Engineer working on cutting-edge products at the intersection of hardware and software.</h1>
                    <Button><NavLink to = "/about/" className = "button-link">Want to learn more?</NavLink></Button>
                    <Route path = "/about/" component = { About }/>
                 </Container>
             </Container> 
        );
    }
}

export default Landing; 