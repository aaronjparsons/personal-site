import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../Styles/Particles.scss';

class Particle extends Component {

  componentDidMount() {
    const particleStyle = this.props.particleParams;
    console.log(particleStyle);
  }

  render() {
    return (
      <Particles
        className='particles'
        style={{'background-color': `${this.props.background}`, 'transition': 'all 600ms'}}
        params={this.props.particleParams} />
    );
  }
}

export default Particle;