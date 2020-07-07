import React, { Component } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";

// import BIRDS from '../../vanta/dist/vanta.birds.min';

class About extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container className = "align-content-center">
                    <h1 className = "lead">Hi, I'm</h1>
                    <h1 className = "display-3">Alex Feeley.</h1>
                    <h1 className = "lead">I'm a Junior at Vanderbilt studying Computer Engineering with a 
                        passion for creating neat things.</h1>
                    <p>
                        <Button>Want to learn more?</Button>
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default About; 