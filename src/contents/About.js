import React, { Component } from 'react';
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Jumbotron className = "about">
                <Row className = "justify-content-left">
                    <Col xs = {12} md = {3}></Col>
                    <Col xs = {12} md = {{span: 7, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h1>About</h1>
                        </Row>
                    </Col>  
                </Row>
                <Row>
                    <Col xs = {12} md = {4}>
                        <Image src = "/img/headshot.jpeg" fluid roundedCircle></Image>
                    </Col>
                    <Col xs = {12} md = {8}>
                        <Row><h5>Hi, I'm Alex!</h5></Row>
                        <Row><h5>I'm a hardware engineer at <span>Microsoft</span> and a <a href = 
                        "https://engineering.vanderbilt.edu/" target = "_blank" rel = "noopener noreferrer">
                        Vanderbilt University</a> graduate. </h5></Row>
                        <Row><h5>I work on the Platform Systems Engineering team for the <span>Azure Hardware and System Infrastructure </span> 
                             group at Microsoft where we're developing state-of-the-art <a href = "https://news.microsoft.com/source/features/innovation/openai-azure-supercomputer/" target="_blank" rel="noopener noreferrer">AI supercomputers</a>.</h5></Row>
                        <Row><h5>In May of 2022, I completed my Master of Science in <span>Electrical Engineering</span> and my Bachelor of Engineering in <span>Computer Engineering </span>
                            &amp; <span>Math</span> at Vanderbilt University.</h5></Row>
                        <Row><h5>In my free time, you can find me exploring Seattle, hiking up mountains, or volunteering with dogs at Seattle Humane.</h5></Row>
                        <Row><h5>Feel free to <a href = "https://www.linkedin.com/in/alex-feeley/" target="_blank" rel="noopener noreferrer">
                            connect</a> with me, start a <a href = "mailto:alex.t.feeley@gmail.edu" target = "_blank" rel = "noopener noreferrer">conversation</a>, 
                            or check out my recent <a href = "https://www.strava.com/athletes/alexfeeley"
                            target = "_blank" rel = "noopener noreferrer">adventures</a>!</h5></Row>
                        <Row className = "justify-content-center">
                            <Col xs = {3} className = "justify-content-center text-center">
                                <a href = "https://www.linkedin.com/in/alex-feeley/" target = "_blank" rel = "noopener noreferrer">
                                    <i class = "fab fa-linkedin-in"></i>
                                </a>
                            </Col>
                            <Col xs = {3} className = "justify-content-center text-center">
                                <a class = "icon" href = "mailto:alex.t.feeley@gmail.com" rel = "noopener noreferrer">
                                    <i class = "far fa-envelope"></i>
                                </a>
                            </Col>
                            <Col xs = {3} className = "justify-content-center text-center">
                                <a href = "https://scholar.google.com/citations?user=JCuZR6wAAAAJ&hl=en&oi=ao" target = "_blank" rel = "noopener noreferrer">
                                    <i class="fa fa-graduation-cap"></i>
                                </a> 
                            </Col>
                            <Col xs = {3} className = "justify-content-center text-center">
                                <a href = "https://www.strava.com/athletes/alexfeeley" target = "_blank" rel = "noopener noreferrer">
                                <i class="fab fa-strava"></i>
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