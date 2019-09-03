import React, { Component } from 'react';
import './Nav.css';
import logo from './logo.svg';

class Nav extends Component {
 render() {
    return (
          <nav className="nav">
            <img src={logo} className="App-logo" alt="logo" />
            <a href="https://rjplaton.github.io/stellar-pairings/">XLM Chart</a>
          </nav>

    );
  }
}
export default Nav;





