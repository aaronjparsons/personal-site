import React, { Component } from 'react';
import '../Styles/StyleTab.scss';

class StyleTab extends Component {
  constructor() {
    super();
    this.state = {
      position: 'hidden',
      className: 'styletab-container'
    }
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    if (this.state.position === 'hidden') {
      this.setState({
        position: 'show',
        className: 'styletab-container-open'
      });
    } else {
      this.setState({
        position: 'hidden',
        className: 'styletab-container'
      });
    }
  }

  render() {
    return (
      <div className={`${this.state.className}`}>
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