import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../Styles/Particles.scss';

class Particle extends Component {
  render() {
    return (
      <Particles
        className='particles'
        style={{'background': `${this.props.background}`}}
        params={{
          "particles": {
              "number": {
                  "value": 60,
                  "density": {
                      "enable": true,
                      "value_area": 1500
                  }
              },
              "line_linked": {
                  "enable": true,
                  "opacity": 0.02
              },
              "move": {
                  "direction": "none",
                  "speed": 1.25
              },
              "size": {
                  "value": 1.25
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.05
                  }
              }
          },
          "retina_detect": true
      }} />
    );
  }
}

export default Particle;