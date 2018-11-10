import React, { Component } from 'react';
import '../Styles/App.scss';
import Particles from './Particles';
import Header from './Header';

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
      </div>
    );
  }
}

export default App;
