import React, { Component } from 'react';
import api from '../api';

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount(){
    api.getUser(api.loadUser().name)
    .then( user => {
      this.setState({
       user: user 
      })
    })
    .catch(err => {throw err})
  } 
  render() {                
    return (
      <div className="Home">
        <h2>Hello {api.loadUser().name}</h2>
        <p>Welcome back!</p>
        <p>Collect more points by solving exercises!</p>
      </div>
    );
  }
}

export default UserProfile;
