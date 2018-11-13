import React, { Component } from 'react';
import '../Styles/App.scss';
import { colorStyles, particleStyles } from '../styleCombinations';
import Particles from './Particles';
import StyleTab from './StyleTab';
import Header from './Header';
import About from './About';
import Projects from './Projects';

let styleCounter = 0;
let particleCounter = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      style: colorStyles[0],
      particles: particleStyles[0]
    }
    this.colorChange = this.colorChange.bind(this);
    this.particleChange = this.particleChange.bind(this);
  }

  colorChange() {
    if (styleCounter < colorStyles.length - 1) {
      styleCounter++;
    } else {
      styleCounter = 0;
    }

    const updatedParticles = particleStyles[particleCounter];
    updatedParticles.particles.color.value = colorStyles[styleCounter].textColor;
    updatedParticles.particles.line_linked.color = colorStyles[styleCounter].textColor;

    this.setState({
      style: colorStyles[styleCounter],
      particles: updatedParticles
    });
  }

  particleChange() {
    if (particleCounter < particleStyles.length - 1) {
      particleCounter++;
    } else {
      particleCounter = 0;
    }

    const nextParticles = particleStyles[particleCounter];
    nextParticles.particles.color.value = this.state.style.textColor;
    nextParticles.particles.line_linked.color = this.state.style.textColor;

    this.setState({
      particles: nextParticles
    });
  }

  render() {
    return (
      <div className='App'>
        <Particles 
          particleParams={this.state.particles} 
          background={this.state.style.backgroundColor} 
          color={this.state.style.textColor}
        />
        <StyleTab 
          fontColor={this.state.style.backgroundColor} 
          background={this.state.style.textColor} 
          colorChange={this.colorChange} 
          particleChange={this.particleChange}
        />
        <Header 
          fontColor={this.state.style.textColor} 
          background={this.state.style.backgroundColor} 
        />
        <About fontColor={this.state.style.textColor} />
        <Projects 
          fontColor={this.state.style.backgroundColor} 
          background={this.state.style.textColor}
        />
      </div>
    );
  }
}

export default App;
