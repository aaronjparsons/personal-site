import React, { Component } from 'react';
import '../Styles/About.scss';

class About extends Component {
  render() {
    return (
      <div className="container about">
        <div style={{'paddingTop': '10%', 'color': `${this.props.fontColor}`, 'transition': 'color 600ms'}}>
          <h1>ABOUT ME:</h1>
          <p>Junior full stack developer who loves writing code, solving problems, and expressing creativity through technology and the modern web.</p>
          <p>
          With a drive for constant self improvement, I'm focused on always building upon my skill set and expanding my knowledge, allowing me to tackle any project and write clean code with best practices in mind.</p>
          <p>Currently working with <span className='bold'>Javascript</span>, <span className='bold'>Vue</span>, <span className='bold'>Node.js</span>, <span className='bold'>MongoDB/Firebase</span>, and <span className='bold'>SASS</span>.</p>
        </div>
      </div>
    );
  }
}

export default About;