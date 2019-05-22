import Card from 'react-bootstrap/Card';
import React, { Component } from 'react';

class WorkExperience extends Component {
    render(){
        return (
            <Card style={{height : "477px"}}>
                <Card.Body>
                    <Card.Title>
                        <h4>Experience</h4>
                    </Card.Title>            
                    <ul className="timeline">
                        <li>
                            <h5><a target="_blank" rel="noopener noreferrer" href="https://www.orowealth.com/">Orowealth</a></h5>
                            <h6 className="text-muted">Jun 2018 - Dec 2018</h6>
                            <p> Worked as full stack Developer building a financial planning tool for Sharekhan.
                            </p>
                        </li>
                        <li>
                            <h5><a target="_blank" rel="noopener noreferrer" href="https://www.cdkglobal.com/">CDK GLOBAL</a></h5>
                            <h6 className="text-muted">Jul 2016 - May 2018</h6>
                            <p>
                                Worked as part of common services team, converting legacy system's data to present world's data by 
                                applying bussiness logic and exposing it to other teams as REST API's on which other products are built.
                            </p>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        );
    }
}
export default WorkExperience;