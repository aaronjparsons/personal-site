import React, { Component } from 'react';
import '../Styles/About.scss';

class About extends Component {
  render() {
    return (
      <div class="container about">
        <div>
          <p>I've always been interested in programming and began teaching myself during my spare time, and have since jumped in head first, always striving to improve my skills. I enjoy being faced with new and interesting problems and implementing creative solutions. I am a strong team player with experience working efficiently in a team from past jobs, but am also very individually motivated and able to work independently.</p>
          <p>Currently working with <span class='bold'>Javascript</span>, <span class='bold'>React</span>, <span class='bold'>Express</span>, <span class='bold'>Node.js</span>, <span class='bold'>MongoDB/postgreSQL/Firebase</span>, and <span class='bold'>SASS</span>.</p>
        </div>
      </div>
    );
  }
}

export default About;