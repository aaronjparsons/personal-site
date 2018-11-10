import React, { Component } from 'react';
import '../Styles/Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div class="container">
          <h1>Hey, I'm <span class="highlight">Aaron</span></h1>
          <h3>~ A <span class="highlight">full-stack</span> developer in Canada ~</h3>
        </div>
      </header>
    );
  }
}

export default Header;