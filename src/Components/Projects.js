import React, { Component } from 'react';
import '../Styles/Projects.scss';

const projects = [
  {
    class: 'eftfg',
    name: 'EFTFG',
    desc: 'Vue | Gridsome',
    link: 'https://eftfg.com'
  },
  {
    class: 'stable',
    name: 'Stable',
    desc: 'React-Native | Firebase | Stripe',
    link: 'https://github.com/aaronjparsons/Final-Project'
  },
  {
    class: 'chatty',
    name: 'Chatty',
    desc: 'React | Express | Websockets',
    link: 'https://github.com/aaronjparsons/chatty-app'
  },
  {
    class: 'tweeter',
    name: 'Tweeter',
    desc: 'Express | MongoDB | jQuery',
    link: 'https://github.com/aaronjparsons/tweeter'
  },
  {
    class: 'yegbot',
    name: 'YegBot',
    desc: 'Javascript | NodeJS',
    link: 'https://twitter.com/YegBot'
  },
  {
    class: 'tinyapp',
    name: 'TinyApp',
    desc: 'Express | EJS',
    link: 'https://github.com/aaronjparsons/tinyapp-url-shortener'
  }
];

class Projects extends Component {
  render() {
    return (
      <div className='container'>
        <h1 style={{'color': `${this.props.background}`, 'transition': 'color 600ms'}}>PROJECTS:</h1>
        <div className='project-container' id='projects'>
          {projects.map((project, index) => {
            return (
              <a href={`${project.link}`} key={index} target="_blank" rel="noopener noreferrer">
                <div className={`project-box ${project.class}`}>
                  <h1 className="text-default" style={{'backgroundColor': `${this.props.background}`, 'color': `${this.props.fontColor}`}}>{`${project.name}`}</h1>
                  <p className="text-hover" style={{'backgroundColor': `${this.props.background}`, 'color': `${this.props.fontColor}`}}>{`${project.desc}`}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;