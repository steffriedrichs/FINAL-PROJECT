import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Components.css';
import api from '../api';


class Lecture extends React.Component {
  constructor(props) {
    super(props)
  }
  // componentDidMount(){
  //   api.getOneUnit(this.props.match.params.unitId)
  //   .then( currentUnit => {
  //     this.setState({
  //      myUnit: currentUnit,
  //      loading: false
  //     })
  //   })
  //   .catch(err => {throw err})
  // }
  render() {
    // if (this.state.loading)
      // return "Loading..."
    return (
      <div>
        <h1>Read the Lecture!</h1>
      </div>
    );
  }
}

export default Lecture;