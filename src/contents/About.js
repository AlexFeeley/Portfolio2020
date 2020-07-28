import React, { Component } from 'react';
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Jumbotron className = "about">
                <Row className = "justify-content-center">
                    <h1>About</h1>
                </Row>
                <Row>
                    <Col xs = {12} md = {4}>
                        <Image src = "/img/headshot.jpeg" fluid roundedCircle></Image>
                    </Col>
                    <Col xs = {12} md = {8}>
                        <Row><h5>Hi, I'm Alex!</h5></Row>
                        <Row><h5>I'm in my Junior year at <a href = 
                        "https://engineering.vanderbilt.edu/" target = "_blank" rel = "noopener noreferrer">
                            Vanderbilt University</a> where I'm pursuing an accelerated BE/MSc. In May of 2022, 
                            I'll be graduating with a Bachelor of Engineering in <span>Computer Engineering </span>
                            &amp; <span>Math</span> and a Master of Science in <span>Electrical Engineering</span>.</h5></Row>
                        <Row><h5>In my free time, I like to run through Nashville, try new vegetarian recipes, and
                            foster dogs through Nashville Humane's Rovernight program</h5></Row>
                        <Row><h5>Feel free to <a href = "https://www.linkedin.com/in/alex-feeley/" target="_blank" rel="noopener noreferrer">
                            connect</a> with me, check out what I'm <a href = "https://open.spotify.com/user/22xjhwn3qw6g3nxnyra2oycki?si=0etDI5Y7TzK-HsD0kbEX0A"
                            target = "_blank" rel = "noopener noreferrer">listening</a> to, or start a <a href = 
                            "mailto:alexandra.feeley.lamb@vanderbilt.edu" target = "_blank" rel = "noopener noreferrer">conversation!</a></h5></Row>
                        <Row className = "justify-content-center">
                            <Col xs = {6} md = {3} className = "justify-content-center">
                                <a href = "https://github.com/AlexFeeley" target = "_blank" rel = "noopener noreferrer">
                                    <i class = "fab fa-github"></i>
                                </a>
                            </Col>
                            <Col xs = {6} md = {3} className = "justify-content-center">
                                <a href = "https://www.linkedin.com/in/alex-feeley/" target = "_blank" rel = "noopener noreferrer">
                                    <i class = "fab fa-linkedin-in"></i>
                                </a>
                            </Col>
                            <Col xs = {6} md = {3} className = "justify-content-center">
                                <a class = "icon" href = "mailto:alexandra.feeley.lamb@vanderbilt.edu" rel = "noopener noreferrer">
                                    <i class = "far fa-envelope"></i>
                                </a>
                            </Col>
                            <Col xs = {6} md = {3} className = "justify-content-center">
                                <a href = "https://open.spotify.com/user/22xjhwn3qw6g3nxnyra2oycki?si=0etDI5Y7TzK-HsD0kbEX0A" target = "_blank" rel = "noopener noreferrer">
                                    <i class="fab fa-spotify"></i>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default About; 