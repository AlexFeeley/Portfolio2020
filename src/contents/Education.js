import React, { Component } from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";

class Education extends Component {
    render() {
        return (
            <Jumbotron className = "education">
                <Row className = "justify-content-center">
                    <h1>Education</h1>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {3}>
                        <Image src = "img/vandy.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 7, offset: 1}}>
                        <Row className = "justify-content-center text-center">
                            <h3>Vanderbilt University</h3>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Expected Bachelor of Engineering in Computer Engineering &amp; Math, May 2022</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Expected Master of Science in Electrical Engineering, May 2022</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h6>Honors: IEEE Eta Kappa Nu Honor Society (Top 25% of EE/CompE class), Dean's List
                            (Fall 2018, Fall 2019, Spring 2020)</h6>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h6>Activities: VUcept, Code Ignite, SyBBURE Searle Undergraduate Research Program, 
                            Theta Tau Professional Engineering Fraternity</h6>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12} md = {{span: 7, offset: 1}} className = "order-2 order-md-1">
                        <Row className = "justify-content-center text-center">
                            <h3>The Bronx High School of Science</h3>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Advanced Regents Diploma, June 2018</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h6>Activities: Big Sibs, National Honors Society, Varsity Soccer Team, Varsity Softball 
                                Team, Chess Team </h6>
                        </Row>
                    </Col>
                    <Col xs = {12} md = {3} className = "justify-content-center text-center order-1 order-md-2">
                        <Image src = "img/bxsci.png" roundedCircle/>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Education; 