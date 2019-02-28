import React from 'react'
import ReactDOM from 'react-dom';

class Image extends React.Component {
  render() {
    return (
      <div className={`component-image ${this.props.circular ? 'circular' : '' }`} style={{backgroundImage: `url(${this.props.src})`}}>
      </div>
    );
  }
};

export default Image;
