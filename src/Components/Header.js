import React, { Component } from 'react';
import '../Styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <header style={{'color': `${this.props.fontColor}`}}>
        <div className="container">
          <h1 style={{'border-top': `5px solid ${this.props.fontColor}`, 'border-bottom': `5px solid ${this.props.fontColor}`}}>Hey, I'm <span className="highlight">Aaron</span></h1>
          <h3>~ A <span className="highlight">full-stack</span> developer in Canada ~</h3>
          <div className="icons">
            <a href="https://github.com/aaronjparsons"><i className="fab fa-github" data-name="Visit My GitHub"></i></a>
            <a href="https://www.linkedin.com/in/aaron-parsons"><i className="fab fa-linkedin-in" data-name="Connect On LinkedIn"></i></a>
            <a href="https://resume.creddle.io/resume/21jjsqqu772"><i className="far fa-file-alt" data-name="View My Resume"></i></a>
            <a href="mailto:aaron.parsons@live.ca"><i className="far fa-envelope" data-name="Send Me An Email"></i></a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;