import React, { Component } from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";

class Experience extends Component {
    render() {
        return (
            <Jumbotron className = "experience">
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}></Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h1>Experience</h1>
                        </Row>
                    </Col>  
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "/img/microsoft.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h3><b>Microsoft</b></h3>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><i>Hardware Engineer II, August 2022 - Present</i></h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <p>
                                At Microsoft, I am a hardware engineer II for the Platform Systems Engineering team. I've contributed to the development and integration 
                                of over 40 AI supercomputer (AISC) subsystems, contributing to significant program milestones, including the successful unveiling 
                                of the revolutionary Maia 100. 
                            </p>
                            <p>
                                My cross-functional collaboration with hardware, firmware, and software teams has ensured a seamless integration process. I have further support this integration by providing in-lab support, 
                                debugging issues, and actively participating in process development and documentation. Beyond my collaborative efforts, I've been a driving force 
                                in championing automation on the team. Creating scripts in Python, PowerShell, and Bash, I've significantly reduced system validation time from 2 days to 2 hours and
                                accelerated bug replication and resolution through efficient log collection and analysis. Additionally, I spearheaded the creation of a streamlined 
                                pipeline for fully automated firmware checks and updates, increasing efficiency and ensuring updated systems for our partner teams. 
                            </p>
                            {/* <p>At Microsoft, I am a hardware engineer II for the platform systems engineering group. I support the integration
                                and validation of 40+ <span>AI supercomputer</span> (AISC) subsystems through <span>in-lab support</span>, process development, documentation,
                                and collaboration with partner teams, achieving pivotal program milestones. I spend most days in our lab in Redmond supporting
                                bring-up.</p>
                            <p>I am developing <span>system architecture</span> diagrams outlining fault detection and recovery scenarios for AISC subsystems by analyzing system
                                architecture, circuit diagrams, firmware, and software. This has enabled me to provide recommendations to drive system enhancements.
                                Additionally, I am implementing automated system validation scripts in <span>Python, PowerShell,</span> and <span>Bash</span> to 
                                confirm serial communication, firmware versions, and workload execution. So far, I have reduced system validation time from 2 days to 2 hours, 
                                facilitating bug replication and comprehensive patch testing by partner teams.</p> */}
                        </Row>      
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "/img/ibm.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h3><b>International Business Machines</b></h3>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><i>Hardware Engineer Intern, August 2021 - December 2021</i></h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <p>After my third year at Vanderbilt, I worked as a hardware engineer intern on the <a href = "https://www.ibm.com/products/pcie-cryptographic-coprocessor" target="_blank" rel="noopener noreferrer">
                            hardware security processor</a> for IBM Z. I worked on the CEX7S processor, a programmable PCIe card used on IBM mainframes
                            and servers to offload computationally expensive <span>cryptographic operations</span>. By re-configuring and incorporating <span>FreeRTOS</span> into the CEX7S, 
                            I enabled multi-threading in <span>C</span> for cryptographic operations. Previously, this had been bare-metal C code which did not support
                            multi-threading. Through this, I achieved a 19% improvement in throughput for secure encoding protocols.</p>
                            
                            <p>Additionally, I optimized the <span>C</span> software which ran on the CEX7S processor by implementing updates to stack trace logging 
                            and introducing exception handling mechanisms. This reduced the development debug time 5x, enhancing overall software reliability and efficiency.</p>
                        </Row>      
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "/img/boeing.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h3><b>The Boeing Company</b></h3>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><i>Hardware Engineer Intern, May 2020 - August 2020</i></h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <p>After my second year at Vanderbilt, I worked as a hardware engineer intern with the Solid State Electronics and Development 
                                department at Boeing. I worked on two projects: I supported an existing project based out of Huntington Beach, 
                                CA and also began my own project with the guidance of the team in Tukwila, WA. 
                            </p>
                            <p>For the project in Huntington Beach, I worked on replacing legacy system architecture using <span>C</span> and 
                                <span> VHDL</span> on an Artix-7 FPGA. This extended the operational lifetime of these systems by over 20 years.
                                Additionally, I aided in debugging and verifying firmware for this system. This project was especially interesting
                                because the hardware that I had to use was based in California, where I was not. This provided valuable experience in 
                                collaboration and communication as I was not able to physically interact with the hardware and FPGAs I used on a daily
                                basis. 
                            </p>
                            <p>For my other project, I developed a <span>Verilog-</span>based emulation of a 14-nm bulk finFET radiation test chip on a 
                                Xilinx Zynq-7000 FPGA. The test chips were created to evaluate the <span>effects of radiation</span> on 14-nm bulk finFET
                                technologies used in military and space applications. The emulation I created sped up bring-up by over 3 weeks as it enabled
                                concurrent debugging of the firmware while the physical chip was still in fabrication.   
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "/img/isde.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h3><b>Institute for Space and Defense Electronics</b></h3>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><i>Graduate Research Assistant, August 2019 - May 2022</i></h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <p>I spent 3 years as a research assistant for Dr. Bharat Bhuva studying the <span>effects of radiation </span>
                                on circuits. We focused on circuits used in military and space application that were destined for harsh environments:
                                high altitude, low power, and high temperature. I designed and implemented test environments to simulate these harsh 
                                conditions, conducting physical experiments and circuit simulations to explore the radiation effects on circuit 
                                performance. For physical experiments, I used a 1cm × 1cm 10 µCi241 Americium foil button source, ARACOR x-ray chamber, 
                                pelletron electrostatic particle accelerator, and 88-inch cyclotron to provide beams of heavy ions, protons, and neutrons.
                                Additionally, I used Cadence Xcellium to run circuit-level <span>SPICE simulations</span> and Synopsys Sentaurus to perform <span>TCAD simulations</span>. 
                                The cumulation of my research resulted in the Master's thesis titled, 
                                <a href = "http://hdl.handle.net/1803/17400" target="_blank" rel="noopener noreferrer"><i> The Analysis of Single Event Effects 
                                and Total Ionizing Dose Radiation for the 7-nm Bulk FinFET Technology Node</i></a>. This also resulted in <a href="#/publications">
                                11 publications</a> exploring the effect of radiation on 5-nm and 7-nm bulk finFET technologies.</p>
                        </Row>
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "/img/vibre.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h3><b>Vanderbilt Institute for Integrative Biosystems Research and Education</b></h3>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><i>Undergraduate Research Assistant, May 2019 - August 2019</i></h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <p>After my first year at Vanderbilt, I became a SyBBURE Searle Undergraduate Research Fellow.
                                This was my first research experience where I designed a wearable, noninvasive sensor to measure the concentration 
                                of vitamin A in humans. The sensor was based on a pulse oximeter: a current 
                                non-invasive device that utilizes an LED and a photodiode of specific wavelengths 
                                to determine the oxygen level of the blood. In order to design the device, I read 
                                over 70 papers from medical journals to learn about the human physiology necessary 
                                to ensure the methods would properly measure the vitamin A concentration. Based on 
                                the knowledge I gained from these papers, I <span>designed two circuits</span>: an LED circuit 
                                and a photodiode circuit. The LED circuit utilized an NE555 timer to drive the LED 
                                at a pre-determined frequency and duty cycle. The photodiode circuit used a 
                                trans-impedance amplifier to convert the photodiode’s small current into a voltage and 
                                a low pass filter for high-frequency noise. Throughout the design of these circuits, I used 
                                <span> LTSpice</span> to simulate and de-bug my circuits. I provided my mentor with a report 
                                summarizing the research that I conducted along with a file containing all 
                                relevant information. This research was later used as the basis for a project 
                                for another SyBBURE undergraduate reserach fellow. </p>
                        </Row>
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "/img/star.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h3><b>Vanderbilt University</b></h3>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><i>Computer Networks Teaching Assistant, January 2022 - May 2022</i></h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <p>I spent my last semester at Vanderbilt as a teaching assistant for computer networks (CS 4283). The course gave an introduction to computer communications 
                                and network architecture by focusing on algorithm and protocol design at each layer of the network stack, cross-layer interactions and performance analysis, 
                                and network simulation tools. I served as a grader for the weekly quizzes and programming assignments and held four hours of office hours a week to aid students
                                in their programming assignments which used <span>C, Java, TCL,</span> and <span>Wireshark</span>.</p>
                        </Row>     
                        <Row className = "justify-content-left text-left">
                            <h5><i>Software Design Patterns Teaching Assistant, August 2020 - May 2021</i></h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <p>I spent my third year at Vanderbilt as a teaching assignments for intermediate software design (CS 3251). The course focused on high quality development
                                and reuse of architectural patterns, design patterns, and software components. This was done by using programming assignments and bi-weekly quizzes to cover
                                the theoretical and practical aspects of developing, documenting, testing, and applying reusable class libraries and object-oriented frameworks in C++. I 
                                served as a grader for these varied <span>C++</span> programming assignments and help 3 hours of office hours each week to aid students as they implemented
                                these foundations. </p>
                        </Row>   
                        <Row className = "justify-content-left text-left">
                            <h5><i>Lifeguard and Swim Instructor, May 2019 - March 2020</i></h5>
                        </Row>
                    </Col>
                </Row>
                <Row className = "justify-content-center text-center">
                    <Col xs = {12} md = {2}>
                        <Image src = "/img/wmp.png" fluid/>
                    </Col>
                    <Col xs = {12} md = {{span: 8, offset: 1}}>
                        <Row className = "justify-content-left text-left">
                            <h3><b>The Westfield Memorial Pool</b></h3>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><i>Assistant Manager, May 2018 - August 2018</i></h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><i>Swim Instructor, June 2016 - August 2018</i></h5>
                        </Row>
                        <Row className = "justify-content-left text-left">
                            <h5><i>Lifeguard, July 2015 - August 2018</i></h5>
                        </Row>
                    </Col>
                </Row>
                {/* <Route path = "/publications" component = { Publications }/> */}
            </Jumbotron>
        );
    }
}

export default Experience; 