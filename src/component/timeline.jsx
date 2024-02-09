import React, {Component} from 'react';
import "../css/timeline.css"
import Experience from "./experience";
import Feedback from "./feedback"
class Timeline extends Component {
    render() {
        return (
            <div className="container timline">
                <Experience />
                <div className="feedback ">
                    <h1 className="text-center">Feedback</h1>
                    <Feedback id="-1" />
                </div>
            </div>
        );
    }
}

export default Timeline;