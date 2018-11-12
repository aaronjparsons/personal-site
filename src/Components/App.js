import React, { Component } from 'react';
import '../Styles/App.scss';
import styleCombos from '../assets/style-combos.json';
import Particles from './Particles';
import StyleTab from './StyleTab';
import Header from './Header';
import About from './About';
import Projects from './Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        backgroundColor: '#465A64',
        textColor: '#FAFAFA'
      }
    }
    this.colorChange = this.colorChange.bind(this);
    this.particleChange = this.particleChange.bind(this);
  }

  colorChange() {
    const newStyle = styleCombos[0]
    this.setState({
      style: newStyle
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
