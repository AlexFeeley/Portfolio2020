import React, { Component } from "react";

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Alex Feeley</h1>
                <ul className = "header">
                    <li><a href = "/about">About</a></li>
                    <li><a href = "/education">Education</a></li>
                    <li><a href = "/experience">Experience</a></li>
                    <li><a href = "/projects">Projects</a></li>
                    <li><a href = "/contact">Contact</a></li>
                </ul>
                <div className = "content">

                </div>
            </div>
        );
    }
}

export default Main; 