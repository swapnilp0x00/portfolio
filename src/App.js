import React, { Component } from "react";
import Header from "./components/header";
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
        <div className="body">
          <Header />
          <section className='cardSection'>
            <div id='skills'>
              <Skills></Skills>
            </div>
            <div id='about'>
              <About></About>
            </div>
            <div id='experience'>
              <WorkExperience></WorkExperience>
            </div>

          </section>

          <section className="linksSection">
            <div className="logo-container">
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
                  rel="noopener noreferrer"
                >
                  <StackOverflow
                    className="material-icons icon-links"
                    aria-label="stackoverflow link"
                  />
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
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
