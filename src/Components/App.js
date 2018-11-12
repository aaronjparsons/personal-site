import React, { Component } from 'react';
import '../Styles/App.scss';
// import styleCombos from '../assets/style-combos.json';
import { colorStyles } from '../styleCombinations';
import Particles from './Particles';
import StyleTab from './StyleTab';
import Header from './Header';
import About from './About';
import Projects from './Projects';

let styleCounter = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      style: colorStyles[0]
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
    this.setState({
      style: colorStyles[styleCounter]
    });
  }

  particleChange() {
    console.log('PARTICLE CHANGE');
  }  

  render() {
    return (
      <div className='App'>
        <Particles background={this.state.style.backgroundColor} color={this.state.style.textColor}/>
        <StyleTab colorChange={this.colorChange} particleChange={this.particleChange}/>
        <Header fontColor={this.state.style.textColor} />
        <About fontColor={this.state.style.textColor} />
        <Projects fontColor={this.state.style.textColor} />
      </div>
    );
  }
}

export default App;
