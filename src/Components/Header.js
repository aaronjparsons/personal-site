import React, { Component } from 'react';
import '../Styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="container">
          <h1>Hey, I'm <span class="highlight">Aaron</span></h1>
          <h3>~ A <span class="highlight">full-stack</span> developer in Canada ~</h3>
          <div class="icons">
            <a href="https://github.com/aaronjparsons"><i class="fab fa-github" data-name="Visit My GitHub"></i></a>
            <a href="https://www.linkedin.com/in/aaron-parsons"><i class="fab fa-linkedin-in" data-name="Connect On LinkedIn"></i></a>
            <a href="https://resume.creddle.io/resume/21jjsqqu772"><i class="far fa-file-alt" data-name="View My Resume"></i></a>
            <a href="mailto:aaron.parsons@live.ca"><i class="far fa-envelope" data-name="Send Me An Email"></i></a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;