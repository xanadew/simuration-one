import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from "../shelfie-logo.png"

import '../App.css';

class Header extends Component {

  render() {
    return(
      <div className='header'>
        <Link to="/">
          <img src="shelfie-logo.png" />
          <h1>This is the header</h1>
        </Link>
      </div>
    )
  }
}

export default Header;
