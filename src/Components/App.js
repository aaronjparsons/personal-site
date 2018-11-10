import React, { Component } from 'react';
import '../Styles/App.scss';
import Particles from './Particles';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles />
        <Header />
      </div>
    );
  }
}

export default App;
