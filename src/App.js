import React, { Component } from "react";
import Header from "./components/header";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {
  GithubBox,
  TwitterBox,
  StackOverflow,
  LinkedinBox,
} from "mdi-material-ui";
import About from "./components/about";
import "./App.css";
import WorkExperience from "./components/workExperience";
import Skills from "./components/skills"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Row>
            <Col sm={4}>
              <Skills></Skills>
            </Col>
            <Col sm={4}>
              <About></About>
            </Col>
            <Col sm={4}>
              <WorkExperience></WorkExperience>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="logo">
                <a
                  href="https://github.com/praveshtora/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubBox
                    className="material-icons icon-links"
                    aria-label="github link"
                  />
                </a>
              </div>
            </Col>
            <Col>
              <div className="logo">
                <a
                  href="https://stackoverflow.com/users/10727611/pravesh-tora?tab=profile "
                  target="_blank"
                  rel="noopener noreferrer">
                <StackOverflow
                  className="material-icons icon-links"
                  aria-label="stackoverflow link"/>
                </a>
              </div>
            </Col>
            <Col>
              <div className="logo">
                <a
                  href="https://www.linkedin.com/in/pravesh-tora/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinBox
                    className="material-icons icon-links"
                    aria-label="Linkedin link"
                  />
                </a>
              </div>
            </Col>
            <Col>
              <div className="logo">
                <a
                  href="https://twitter.com/coolpravesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterBox
                    className="material-icons icon-links"
                    aria-label="twitter link"
                  />
                </a>
              </div>
            </Col>
          </Row>
      </div>
    );
  }
}

export default App;
