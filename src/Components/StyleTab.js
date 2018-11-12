import React, { Component } from 'react';
import '../Styles/StyleTab.scss';

const defaultPosition = '-100px';

class StyleTab extends Component {
  constructor() {
    super();
    this.state = {
      position: 'hidden',
      top: defaultPosition
    }
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    if (this.state.position === 'hidden') {
      this.setState({
        position: 'show',
        top: '0'
      });
    } else {
      this.setState({
        position: 'hidden',
        top: defaultPosition
      });
    }
  }

  render() {
    return (
      <div className="styletab-container" style={{top: `${this.state.top}`}}>
        <div className="styletab-info">
          <button>Change Colors</button>
          <button>Change Particles</button>
        </div>
        <div className="styletab-toggle" onClick={this.toggleClick}>
          Style Me!
        </div>
      </div>
    );
  }
}

export default StyleTab;