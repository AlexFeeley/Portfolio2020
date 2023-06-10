import React, { Component } from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";

class Education extends Component {
    render() {
        return (
            <Jumbotron className = "education">
                <Row className = "justify-content-left">
                    <Col xs = {12} md = {3}></Col>
                    <Col xs = {12} md = {{span: 7, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h1>Education</h1>
                        </Row>
                    </Col>  
                </Row>
                <Row className = "justify-content-left text-left">
                    <Col xs = {12} md = {3}>
                        <Image src = "img/vandy.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 7, offset: 1}} >
                        <Row className = "justify-content-left text-left">
                            <h3><b>Vanderbilt University</b></h3>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><b>Master of Science in Electrical Engineering, May 2022</b></h5>
                        </Row>
                        <Row>
                            <h6><em>Advisor:</em> Bharat Bhuva</h6>
                        </Row>
                        <Row>
                            <h6><i>Thesis:</i> <a href = "http://hdl.handle.net/1803/17400" target="_blank" rel="noopener noreferrer">The Analysis of Single Event Effects and Total Ionizing Dose Radiation for the 7-nm Bulk FinFET Technology Node</a></h6>
                        </Row>
                        <Row>
                            <h6><i>Relevant Coursework:</i> FPGA Design, Digitial Systems Architecture, VLSI Design, Hybrid &amp; Embedded Systems, AI for Cyber-Physical
                            Systems, Deep Learning, Software Design Patterns, Algorithms &amp; Data Structures</h6>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><b>Bachelor of Engineering in Computer Engineering &amp; Math,</b> May 2022</h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h6><i>Honors and Awards:</i> Criley Award (Top ECE Interdisciplinary Capstone Project), 
                                IEEE Eta Kappa Nu Honor Society (Top 25% of ECE class), 
                                SyBBURE Searle Undergraduate Research Fellow, Dean's List (7 semesters)</h6>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h6><i>Activities:</i> VUcept First-Year Peer Mentor, Theta Tau Professional Engineering Fraternity</h6>
                        </Row>
                    </Col>
                </Row>
                <Row><br></br></Row>
                <Row>
                    <Col xs = {12} md = {3} className = "justify-content-center text-center order-1 order-md-1">
                        <Image src = "img/bxsci.png" roundedCircle/>
                    </Col>
                    <Col xs = {12} md = {{span: 7, offset: 1}} className = "order-1 order-md-1">
                        <Row className = "justify-content-left text-left">
                            <h3><b>The Bronx High School of Science</b></h3>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><b>Advanced Regents Diploma,</b> June 2018</h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h6><i>Activities:</i> Big Sibs Peer Mentor, National Honors Society, Varsity Soccer Team, Varsity Softball 
                                Team, Chess Team </h6>
                        </Row>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Education; 