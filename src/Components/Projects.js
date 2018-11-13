import React, { Component } from 'react';
import '../Styles/Projects.scss';

const projects = [
  {
    class: 'stable',
    name: 'Stable',
    desc: 'React-Native | Firebase | Stripe'
  },
  {
    class: 'chatty',
    name: 'Chatty',
    desc: 'React | Express | Websockets'
  },
  {
    class: 'jungle',
    name: 'Jungle',
    desc: 'Ruby on Rails | RSpec'
  },
  {
    class: 'tweeter',
    name: 'Tweeter',
    desc: 'Express | MongoDB | jQuery'
  },
  {
    class: 'yegbot',
    name: 'YegBot',
    desc: 'Javascript | NodeJS'
  },
  {
    class: 'tinyapp',
    name: 'TinyApp',
    desc: 'Express | EJS'
  }
];

class Projects extends Component {
  render() {
    return (
      <div className='container'>
        <h1 style={{'color': `${this.props.background}`, 'transition': 'color 600ms'}}>PROJECTS:</h1>
        <div className='project-container' id='projects'>
          {projects.map((project) => {
            return (
              <div className={`project-box ${project.class}`}>
                <h1 className="text-default" style={{'backgroundColor': `${this.props.background}`, 'color': `${this.props.fontColor}`}}>{`${project.name}`}</h1>
                <p className="text-hover" style={{'backgroundColor': `${this.props.background}`, 'color': `${this.props.fontColor}`}}>{`${project.desc}`}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;