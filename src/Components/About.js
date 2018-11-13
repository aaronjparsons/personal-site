import React, { Component } from 'react';
import '../Styles/About.scss';

class About extends Component {
  render() {
    return (
      <div className="container about">
        <div style={{'paddingTop': '10%', 'color': `${this.props.fontColor}`, 'transition': 'color 600ms'}}>
          <h1>ABOUT:</h1>
          <p>I've always been interested in programming and began teaching myself during my spare time, and have since jumped in head first, always striving to improve my skills. I enjoy being faced with new and interesting problems and implementing creative solutions. I am a strong team player with experience working efficiently in a team from past jobs, but am also very individually motivated and able to work independently.</p>
          <p>Currently working with <span className='bold'>Javascript</span>, <span className='bold'>React</span>, <span className='bold'>Express</span>, <span className='bold'>Node.js</span>, <span className='bold'>MongoDB/Firebase</span>, and <span className='bold'>SASS</span>.</p>
        </div>
      </div>
    );
  }
}

export default About;