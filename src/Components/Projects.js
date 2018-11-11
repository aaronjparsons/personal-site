import React, { Component } from 'react';
import '../Styles/Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="project-container" id="projects">
          <div className="project-box stable">
            <h1 className="text-default">Stable</h1>
            <p className="text-hover">React-Native | Firebase | Stripe</p>
          </div>
          <div className="project-box chatty">
            <h1 className="text-default">Chatty</h1>
            <p className="text-hover">React | Express | Websockets</p>
          </div>
          <div className="project-box jungle">
            <h1 className="text-default">Jungle</h1>
            <p className="text-hover">Ruby on Rails | RSpec</p>
          </div>
          <div className="project-box tweeter">
            <h1 className="text-default">Tweeter</h1>
            <p className="text-hover">Express | MongoDB | jQuery</p>
          </div>
          <div className="project-box yegbot">
            <h1 className="text-default">YegBot</h1>
            <p className="text-hover">Javascript | NodeJS</p>
          </div>
          <div className="project-box tinyapp">
            <h1 className="text-default">TinyApp</h1>
            <p className="text-hover">Express | EJS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;