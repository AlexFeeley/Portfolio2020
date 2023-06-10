import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Publications extends Component {
    render() {
        return (
            <Jumbotron className = "publications">
                <h1>Publications</h1>
                <h3>Journal Publications</h3>
                <ol>
                    <li><a href="https://ieeexplore.ieee.org/document/10027473" target = "_blank" rel = "noopener noreferrer">N. J. Pieper, Y. Xiong, <b>A. Feeley,</b> <i>et al.,</i> "Study of Multicell Upsets in SRAM at a 5-nm Bulk FinFET Node," <i>IEEE Transactions on Nuclear Science,</i> vol. 70, no. 4, pp. 401-409, 2023.</a></li>
                    <li><a href="https://ieeexplore.ieee.org/document/9968203" target = "_blank" rel = "noopener noreferrer">Y. Xiong, N. J. Pieper, <b>A. Feeley,</b> <i>et al.,</i> "Single-Event Upset Cross-Section Trends for D-FFs at the 5- and 7-nm Bulk FinFET Technology Nodes," <i>IEEE Transactions on Nuclear Science,</i> vol. 70, no. 4, pp. 381-386, 2023.</a></li>
                    <li><a href="https://ieeexplore.ieee.org/document/9762302" target = "_blank" rel = "noopener noreferrer"><b>A. Feeley,</b> Y. Xiong, N. J. Pieper, <i>et al.,</i> "SE Performance of D-FF Designs With Different VT Options at Near-Threshold Supply Voltages in 7-nm Bulk FinFET Technology," <i>IEEE Transactions on Nuclear Science,</i> vol. 69, no. 7, pp. 1582-1586, 2022.</a></li>
                    <li><a href="https://ieeexplore.ieee.org/document/9686722" target = "_blank" rel = "noopener noreferrer"><b>A. Feeley,</b> Y. Xiong, N. Guruswamy, and B. L. Bhuva, "Effect of Frequency on Total Ionizing Dose Response of Ring Oscillator Circuits at the 7-nm Bulk FinFET Node," <i>IEEE Transactions on Nuclear Science,</i> vol. 69, no. 3, pp. 327-332, 2022.</a></li>
                    <li><a href="https://ieeexplore.ieee.org/document/9663109" target = "_blank" rel = "noopener noreferrer">Y. Xiong, <b>A. Feeley,</b> D. R. Ball, and B. L. Bhuva, "Modeling Logic Error Single-Event Cross Sections at the 7-nm Bulk FinFET Technology Node," <i>IEEE Transactions on Nuclear Science,</i> vol. 69, no. 3, pp. 422-428, 2022.</a></li>
                    <li><a href="https://ieeexplore.ieee.org/document/9445089" target = "_blank" rel = "noopener noreferrer">Y. Xiong, <b>A. Feeley,</b> P. F. Wang, <i>et al.,</i> "Supply Voltage Dependence of Ring Oscillator Frequencies for Total Ionizing Dose Exposures for 7-nm Bulk FinFET Technology," <i>IEEE Transactions on Nuclear Science,</i> vol. 68, no. 8, pp. 1579-1584, 2021.</a></li>
                </ol>
                <h3>Conference Publications</h3>
                <ol>
                    <li><a href="https://ieeexplore.ieee.org/document/9764523" target = "_blank" rel = "noopener noreferrer">Y. Xiong, <b>A. Feeley,</b> N. J. Pieper, <i>et al.,</i> "Soft Error Characterization of D-FFs at the 5-nm Bulk FinFET Technology for the Terrestrial Environment," in <i>International Reliability Physics Symposium (IRPS)</i>, 2022, pp. 7C.3-1-7C.3-7.</a></li>
                    <li><a href="https://ieeexplore.ieee.org/document/9764419" target = "_blank" rel = "noopener noreferrer">N. J. Pieper, Y. Xiong, <b>A. Feeley,</b> <i>et al.,</i> "Single-Event Latchup Vulnerability at the 7-nm FinFET Node," in <i>2022 IEEE International Reliability Physics Symposium (IRPS)</i>, 2022, pp. 5C.2-1-5C.2-6.</a></li>
                    <li><a href="https://ieeexplore.ieee.org/document/9954525" target = "_blank" rel = "noopener noreferrer">N. J. Pieper, Y. Xiong, <b>A. Feeley,</b> <i>et al.,</i> "Micro-Latchup Location and Temperature Characterization in a 7-nm Bulk FinFET Technology" in <i>2021 21th European Conference on Radiation and Its Effects on Components and Systems (RADECS),</i> 2021, pp. 1-7.</a></li>
                    <li><a href="https://ieeexplore.ieee.org/document/9405128" target = "_blank" rel = "noopener noreferrer">Y. Xiong, <b>A. Feeley,</b> L. W. Massengill, <i>et al.,</i> "Frequency, LET, and Supply Voltage Dependence of Logic Soft Errors at the 7-nm Node," in <i>2021 IEEE International Reliability Physics Symposium (IRPS),</i>, 2021, pp. 1-5.</a></li>
                    <li><a href="https://ieeexplore.ieee.org/document/9405124" target = "_blank" rel = "noopener noreferrer"><b>A. Feeley,</b> Y. Xiong, B. L. Bhuva, <i>et al.,</i> "Effects of Temperature and Supply Voltage on Soft Errors for 7-nm Bulk FinFET Technology," in <i>2021 IEEE International Reliability Physics Symposium (IRPS),</i>, 2021, pp. 1-5.</a></li>
                </ol>
            </Jumbotron>
        );
    }
}

export default Publications; 