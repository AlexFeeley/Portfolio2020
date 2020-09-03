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