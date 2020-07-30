import React, { Component } from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";

class Experience extends Component {
    render() {
        return (
            <Jumbotron className = "experience">
                <Row className = "justify-content-center">
                    <h1>Experience</h1>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "img/boeing.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-center text-center">
                            <h3>The Boeing Company</h3>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Solid State Electronics Development Intern, May 2020 - August 2020</i></h5>
                        </Row>
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "img/isde.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-center text-center">
                            <h3>Institute for Space and Defense Electronics</h3>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Undergraduate Researcher, August 2019 - Present</i></h5>
                        </Row>
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "img/sybbure.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-center text-center">
                            <h3>SyBBURE Searle Undergraduate Research Program</h3>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Participant, May 2019 - Present</i></h5>
                        </Row>
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "img/vibre.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-center text-center">
                            <h3>Vanderbilt Institute for Integrative Biosystems Research and Education</h3>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Undergraduate Researcher, May 2019 - August 2019</i></h5>
                        </Row>
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "img/wmp.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-center text-center">
                            <h3>The Westfield Memorial Pool</h3>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Manager, May 2018 - August 2018</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Swim Instructor, June 2016 - August 2018</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Lifeguard, July 2015 - August 2018</i></h5>
                        </Row>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Experience; 