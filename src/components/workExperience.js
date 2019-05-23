import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

class WorkExperience extends Component {
    render(){
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <h4>Experience</h4>
                    </Card.Title>
                    <ul>
                        <li>
                            <h5><a target="_blank" rel="noopener noreferrer" href="https://www.orowealth.com/">Orowealth</a></h5>
                            <h6 className="text-muted">Jun 2018 - Dec 2018</h6>
                            <p>Full stack developer</p>
                        </li>
                        <li>
                            <h5><a target="_blank" rel="noopener noreferrer" href="https://www.cdkglobal.com/">CDK GLOBAL</a></h5>
                            <h6 className="text-muted">Jul 2016 - May 2018</h6>
                            <p>Full stack developer</p>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        );
    }
}
export default WorkExperience;
