import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='component-navigation'>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/resume'>Resume</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
    )
  }
};

export default Navigation;
