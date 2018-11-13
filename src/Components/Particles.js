import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../Styles/Particles.scss';

class Particle extends Component {

  render() {
    return (
      <Particles
        className='particles'
        style={{'backgroundColor': `${this.props.background}`, 'transition': 'all 600ms'}}
        params={this.props.particleParams} />
    );
  }
}

export default Particle;