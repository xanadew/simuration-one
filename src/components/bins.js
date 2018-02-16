import React, {Component} from 'react';
import axios from 'axios';

const url = 'http://localhost:1337/api'




class Bins extends Component {
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
        <h1>Here is the bin item!</h1>
      </div>
    )
  }
}

export default Bins;
