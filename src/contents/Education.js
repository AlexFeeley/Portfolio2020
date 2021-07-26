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
                            <h5><i>Expected Accelerated Master of Science in Electrical Engineering, May 2022</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h6>Thesis Advisor: Dr. Bharat Bhuva</h6>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h6>Graduate Coursework: VLSI Design, Digital Systems Architecture, Hybrid and Embedded Systems, Deep Learning,
                                Reliable Distributed Systems, Statistical Pattern Recognition</h6>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Expected Bachelor of Engineering in Computer Engineering &amp; Math, May 2022</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h6>Honors: IEEE Eta Kappa Nu Honor Society (Top 25% of EE/CompE class), 2020 VUcept 
                                Innovation Award Recipient, March 2021 SyBBURE Student of the Month 
                            </h6>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h6>Activities: <a href = "https://www.vanderbilt.edu/residentialcolleges/ingram-commons/new-student-information/vucept/" 
                            target="_blank" rel="noopener noreferrer">VUcept</a>, <a href = "https://anchorlink.vanderbilt.edu/organization/codeignite" 
                            target="_blank" rel="noopener noreferrer">Code Ignite</a>, <a href = "https://www.sybbure.org/" 
                            target="_blank" rel="noopener noreferrer">SyBBURE Searle Undergraduate Research Program</a>, 
                            <a href = "https://studentorg.vanderbilt.edu/thetatau/" target="_blank" rel="noopener noreferrer">Theta Tau Professional Engineering Fraternity</a></h6>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h6>Undergraduate Coursework: Embedded Systems, FPGA Design, Microcontrollers, Microelectronic Systems, 
                                Data Structures, Software Design Patterns, Algorithms, Computer Networks, Operating Systems, 
                                Circuits I &amp; II, Electronics I, Error Correcting Codes &amp; Cryptography</h6>
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
                        <Row className = "justify-content-center text-center">
                            <h6>Relevant Coursework: Physics I &amp; II, Calculus I &amp; II, Multivariable Calculus</h6>
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