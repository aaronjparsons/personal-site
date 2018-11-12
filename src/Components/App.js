import React, { Component } from 'react';
import '../Styles/App.scss';
import Particles from './Particles';
import StyleTab from './StyleTab';
import Header from './Header';
import About from './About';
import Projects from './Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      particleBg: '#465A64',
      fontColor: '#FAFAFA'
    }
  }
  render() {
    return (
      <div className='App'>
        <Particles background={this.state.particleBg} />
        <StyleTab />
        <Header fontColor={this.state.fontColor} />
        <About fontColor={this.state.fontColor} />
        <Projects fontColor={this.state.fontColor} />
      </div>
    );
  }
}

export default App;
