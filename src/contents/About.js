import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>About</h1>
                <p>Hi, I'm Alex!</p>
                <p>I'm currently in my Junior year at Vanderbilt University where I'm pursuing an accelerated combined BE/MSc. I'm majoring in Computer Engineering and Math for my undergrad degree, and Electrical Engineering for my graduate degree.</p>
                <p>In my free time, I like fiddling with circuits, running, and fostering dogs 
                    through Nashville Humane.</p>
            </Jumbotron>
        );
    }
}

export default About; 