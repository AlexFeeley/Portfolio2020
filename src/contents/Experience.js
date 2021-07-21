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
                            <h5><i>Microelectronics Intern, May 2020 - August 2020</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <p>This past summer, I worked as a Microelectronics intern with the Solid State Electronics and Development 
                                department at Boeing. I worked on two projects: I supported an existing project based out of Huntington Beach, 
                                CA and also began my own project with the guidance of the team in Tukwila, WA. 
                            </p>
                            <p>For the project in Huntington Beach, I worked on replacing legacy system architecture using C and 
                                VHDL on an Artix-7 FPGA. Additionally, I aided in debugging and verifying existing code for the 
                                same system. This project was especially interesting because the hardware and FPGAs I used were 
                                based in California, so I had to remote-on to interact with the hardware and communicate with my 
                                team if I needed something physically done.
                            </p>
                            <p>For my other project, I was given the task of creating an application that allowed future test 
                                software to be debugged before test chips could be fabricated. The test chips were created to 
                                evaluate the effects of radiation on 14 nm FinFET technology. Over the summer, I was able to 
                                develop an application which emulated the function of the test chip using Verilog on a Xilinx 
                                Zynq-7000 FPGA. Ultimately, this emulation sped up the development process by allowing the test 
                                chip to be actively debugged during fabrication.   
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "img/star.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-center text-center">
                            <h3>Intermediate Software Design</h3>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <h5><i>Teaching Assistant, August 2020 - Present</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <p>As a teaching assistant for intermediate software design, or CS 3251, I grade weekly quizzes and 
                            assignments for over 150 students across 3 sections. Additionally, I hold three hours of office hours 
                            each week to aid with programming assignments and exams surrounding software design patterns and 
                            intermediate C++ features.</p>
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
                        <Row className = "justify-content-center text-center">
                            <p>I was first employed by Westfield Memorial Pool at the age of 
                                15 and I continued to work there for four summers. I started 
                                as a lifeguard and learned how a 20 staff pool could function 
                                as a team during emergencies to help patrons who were in distress. 
                                During my second summer, I became a swim instructor and taught 
                                both group and private swim lessons. In group lessons, I worked 
                                with a second instructor to teach ten children of different skill 
                                levels how to swim through various drills and activities. Besides 
                                keeping ten young kids engaged for a full lesson, I learned how 
                                to effectively engage with other instructors. In 2018, before 
                                beginning my freshman year of college, I was promoted to Assistant 
                                Manager. My primary role was to function as a liaison for the staff 
                                of 60 lifeguards as new management came in and sought to make changes. 
                                I worked to facilitate appropriate communication between upper 
                                management and the head lifeguards of the pool.</p>
                        </Row>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Experience; 