import React, { Component } from "react";
import Header from "./components/header";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
        <Container style={{height: '100vh'}}>
        <Header />
          <Row className="active">
            <Col className="leftDiv" xs={{order: 3}} md={{span: 4, order: 1}}>
              <Skills></Skills>
            </Col>
            <Col className="middleDiv" xs={{order: 1}} md={{span:4, order: 2}}>
              <About></About>
            </Col>
            <Col className="rightDiv" xs={{order:2}} md={{span:4, order: 3}}>
              <WorkExperience></WorkExperience>
            </Col>
          </Row>
          <Row style={{"height":"100px","justify-content": "center"}}>

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
              </Row>
        </Container>
      </div>
    );
  }
}

export default App;
