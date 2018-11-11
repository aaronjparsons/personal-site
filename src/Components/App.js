import React, { Component } from 'react';
import '../Styles/App.scss';
import Particles from './Particles';
import Header from './Header';
import About from './About';

class App extends Component {
  constructor() {
    super();
    this.state = {
      particleBg: '#465A64'
    }
  }
  render() {
    return (
      <div className='App'>
        <Particles background={this.state.particleBg} />
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
