import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const url = 'http://localhost:1337/api'



class Shelves extends Component {
  constructor() {
    super()

    this.state = {
      returnedResponse: []
    }
  }


  get() {
    axios
      .get(url + this.props.location.pathname).then((response) => {this.setState({returnedResponse: response.data});
        console.log("Here is the response: ", response)})
      .catch((response) => {
        console.log("We have an issue.")})
  }

  componentWillMount() {
    this.get();
  }





  render() {
    return(
      <div>
        {this.state.returnedResponse.map((item) => {
          return(
            <Link to={`/bin/${item.shelfid}/${item.binid}`}>
              <h1>{item.itemname}</h1>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default Shelves;
