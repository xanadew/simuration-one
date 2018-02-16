import React, {Component} from 'react';

import {Link} from 'react-router-dom';



class Body extends Component {
  constructor() {
    super()

    this.state = {
      selectedShelf: ''
    }
  }


  render() {
    return(
      <div>
        <Link to='/shelf/A'><p>Shelf A</p></Link>
        <Link to='/shelf/B'><p>Shelf B</p></Link>
        <Link to='/shelf/C'><p>Shelf C</p></Link>
        <Link to='/shelf/D'><p>Shelf D</p></Link>
      </div>
    )
  }
}

export default Body;
