import React, { Component } from 'react';
import '../Styles/StyleTab.scss';

const defaultPosition = '-80px';

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
        <div 
          className="styletab-info" 
          style={{
            'backgroundColor': `${this.props.background}`, 
            'transition': 'background-color 600ms'
          }}>
          <button 
            onClick={this.props.colorChange}
            style={{
              'backgroundColor': `${this.props.background}`,
              'border': `2px solid ${this.props.fontColor}`,
              'color': `${this.props.fontColor}`,
              'transition': 'all 600ms'
            }}>Change Colors</button>
          <button 
            onClick={this.props.particleChange}
            style={{
              'backgroundColor': `${this.props.background}`,
              'border': `2px solid ${this.props.fontColor}`,
              'color': `${this.props.fontColor}`,
              'transition': 'all 600ms'
            }}>Change Particles</button>
        </div>
        <div 
          className="styletab-toggle" 
          onClick={this.toggleClick} 
          style={{
            'backgroundColor': `${this.props.background}`, 
            'color': `${this.props.fontColor}`, 
            'transition': 'all 600ms'
          }}>
          <p>Style Me!</p>
        </div>
      </div>
    );
  }
}

export default StyleTab;