import React, { Component } from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";

class Research extends Component {
    render() {
        return (
            <Jumbotron className = "research">
                <Row className = "justify-content-center">
                    <h1>Research</h1>
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
                        <Row className = "justify-content-center text-center">
                            <p>At Vanderbilt, I work as an undergraduate researcher under Dr. Bhuva with the Institute of 
                                Space and Defense Electronics. I am currently evaluating the effects of temperature on single 
                                event upsets on 7 nm FinFET technology. I run experiments to test hypotheses regarding radiation 
                                characterization, and then analyze the data to create figures. Additionally, I have worked on 
                                evaluating the effects of total ionizing dose and single event effects on 5 nm and 7 nm FinFET 
                                technology. My work will be published in several papers later this fall. 
                            </p>
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
                        <Row className = "justify-content-center text-center">
                            <p>As a part of the SyBBURE Searle Undergraduate Research 
                                Program, I receive competitive year-round funding to 
                                take part in undergraduate research. Each week, I present 
                                updates on my research to an interdisciplinary group of 
                                undergraduates. Additionally, I take part in regular technical 
                                and soft skills training with the other students in the program.</p>
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
                        <Row className = "justify-content-center text-center">
                            <p>Last summer, as a participant in the SyBBURE Searle Undergraduate Research 
                                Program, I designed a wearable, noninvasive sensor to measure the concentration 
                                of vitamin A in humans. The sensor was based on a pulse oximeter: a current 
                                non-invasive device that utilizes an LED and a photodiode of specific wavelengths 
                                to determine the oxygen level of the blood. In order to design the device, I read 
                                over 70 papers from medical journals to learn about the human physiology necessary 
                                to ensure the methods would properly measure the vitamin A concentration. Based on 
                                the knowledge I gained from these papers, I designed two circuits: an LED circuit 
                                and a photodiode circuit. The LED circuit utilized an NE555 timer to drive the LED 
                                at a pre-determined frequency and duty cycle. The photodiode circuit used a 
                                trans-impedance amplifier to convert the photodiode’s small current into a voltage. 
                                A low pass filter was employed to remove the photodiode’s response that occurred 
                                above the LED’s driven frequency. Throughout the design of these circuits, I used 
                                LTSpice to simulate and de-bug my circuits. I provided my mentor with a report 
                                summarizing all the research that was conducted along with a file containing all 
                                relevant information. This research will be used as the basis for a future project 
                                for a new participant in SyBBURE. </p>
                        </Row>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Research; 