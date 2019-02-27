import React from 'react'
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <div className='component-header'>
        <div className='nav-container'>
          {this.props.navigation}
        </div>
      </div>
    );
  }
};

export default Header;
