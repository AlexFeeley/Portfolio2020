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
                            <h5><i>Graduate Researcher, August 2019 - Present</i></h5>
                        </Row>
                        <Row className = "justify-content-center text-center">
                            <p>At Vanderbilt, I work as a researcher under Dr. Bhuva with the Institute of 
                                Space and Defense Electronics. I am currenty working on my Master's thesis
                                which is centered around how harsh enrivonments affect soft error rates in 
                                the 5-nm and 7-nm bulk FinFET technology nodes.</p>

                                <p>Last year, I supported research exploring the supply voltage dependence of ring oscillator 
                                frequencies for total ionizing dose exposure for 7-nm bulk FinFET technologes. This
                                resulted in me being the second author on an oral presentation for the 2020 Nuclear
                                and Space Radiation Effects Conference (NSREC) and the corresponding January 2022
                                IEEE Transactions on Nuclear Science (TNS) publication.</p>
                                
                                <p>In the last year, I have quantified soft error rates for 7-nm bulk FinFET technology
                                destined for harsh environments through controlled changes in temperature and supply 
                                voltage. This resulted in a poster presentation at the 2021 International Reliability
                                Physics Symposium (IRPS) and a publication through the conference proceedings. I also
                                supported research on how frequency, linear energy transfer (LET) values, and supply
                                voltage affect logic soft errors for 7-nm bulk FinFET technology. This resulted in my
                                being the second author on an oral presentation and a conference proceedings for IRPS 2021.</p>

                                <p>This year, I also evaluated the effects of frequency on the total ionizing dose response of the 7-nm
                                node through the use of ring oscillators. This resuled in a poster presentation at the 2021 
                                Nuclear and Space Radiation Effects Conference (NSREC) and a publication (currently in-review) 
                                for the January 2022 issue of IEEE Transactions on Nuclear Science. I also supported research which
                                modeled single-event cross-sections for logic circuits at the 7-nm bulk FinFET technology node. This
                                resulted in my being second author on an oral presentation and the corresponding IEEE TNS publication.</p>

                                <p>Most recently, I investigated the single event performance of of D-FF designs with different 
                                threshold voltage options at near-threshold supply voltages in 7-nm bulk FinFET technology. In September
                                2021, I will give an oral presentation on this work at the 2021 Radiation and its Effects on Components
                                and System (RADECS) Conference. This will later result in a publication through a special 2021 RADECS edition
                                of IEEE TNS. Additionally, I also supported research on micro-latchup location and temperature characterization
                                for the 7-nm node. This resulted in my being third author on a poster presentation and its corresponding 
                                publication for RADECS 2021.</p>
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
                            <p>The SyBBURE Searle Undergraduate Research Program is a highly-selective,
                                fully-funded interdisciplinary professional program and innovation
                                incubator. As part of the program, I receive year-round funding to
                                research in a lab of my choosing. Each week, I present research updates
                                to an inderdisciplinary group of undergraduate. Additionally, I take part
                                in regular technical and soft skills training with other students in the 
                                program. </p>
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
                            <p>The summer after my Freshman year at Vanderbilt, I was accepted into the competitive,
                                fully-funded SyBBURE Searle Undergraduate Research Program, where I designed 
                                a wearable, noninvasive sensor to measure the concentration of vitamin A in 
                                humans. The sensor was based on a pulse oximeter: a current 
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