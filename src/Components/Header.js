import React, { Component } from 'react';
import '../Styles/Header.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      iconDescText: '',
      iconDescOpacity: 0,
      arrowOpacity: 100
    }
  }

  componentDidMount() {
    const arrows = document.querySelector('.arrows');
    const windowHeight = window.innerHeight;
    const icons = document.querySelectorAll('.icon');

    // Add scroll event listener to the window
    window.addEventListener('scroll', ()=> {
      const positionFromTop = arrows.getBoundingClientRect().top;
      let opacity = Math.round(positionFromTop) / windowHeight;

      // Accelerate the fade out past the halfway point
      if (opacity < 0.5) {
        opacity = opacity - 0.1;
      }

      if (opacity > 0) {
        this.setState({
          arrowOpacity: opacity
        });
      }
    });

    // Add mouseover and mouseout event listeners to the icons
    icons.forEach((icon) => {
      icon.addEventListener('mouseover', () => {
        this.setState({
          iconDescOpacity: 1,
          iconDescText: icon.dataset.name
        });
      });
      icon.addEventListener('mouseout', () => {
        this.setState({
          iconDescOpacity: 0,
        });
      });
    });
  }

  render() {
    return (
      <header style={{'color': `${this.props.fontColor}`}}>
        <div className="container">
          <h1
            style={{
              'borderTop': `5px solid ${this.props.fontColor}`,
              'borderBottom': `5px solid ${this.props.fontColor}`
            }}>Hey, I'm Aaron</h1>
          <h3>~ A <span style={{'textDecoration': 'underline'}}>full-stack</span> developer in Canada ~</h3>
          <div className="icons">
            <a href="https://github.com/aaronjparsons" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon" data-name="GitHub"></i>
            </a>
            <a href="https://www.linkedin.com/in/aaron-parsons" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in icon" data-name="LinkedIn"></i>
            </a>
            <a href="https://resume.creddle.io/resume/21jjsqqu772" target="_blank" rel="noopener noreferrer">
              <i className="far fa-file-alt icon" data-name="Resume"></i>
            </a>
            <a href="mailto:aaron.parsons@live.ca">
              <i className="far fa-envelope icon" data-name="Email"></i>
            </a>
          </div>
          <h3 className="icon-desc" style={{'opacity': `${this.state.iconDescOpacity}`, 'transition': 'opacity 600ms'}}>{this.state.iconDescText}</h3>
        </div>
        <i className="fas fa-angle-double-down arrows" style={{'opacity': `${this.state.arrowOpacity}`}}></i>
      </header>
    );
  }
}

export default Header;