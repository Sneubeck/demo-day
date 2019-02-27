import React from 'react'
import ReactDOM from 'react-dom';

class Image extends React.Component {
  render() {
    return (
      <div className={`component-image ${this.props.circular ? 'circular' : '' }`}>
      </div>
    );
  }
};

export default Image;
