import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import api from '../api';
import './Components.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      loading: true
    }
  }
  componentDidMount(){
    api.getUser(api.loadUser().name)
    .then( user => {
      this.setState({
       user: user[0],
       loading: false
      })
    })
    .catch(err => {throw err})
  }
  // check: this.props.history.push("/")
  render() {
    if (this.state.loading)
      return "Loading..."
    let pathSplitArray = window.location.href.split('/');
    console.log("SCORE: ",this.state.user.score);
    return (
      <div className="sidebarDiv">
        <div className="scoreClass"> Your Score is: <span className="Score">{this.state.user.score}</span></div>
        {/* always link to courses page */}
        <Link className="sidebarLink" to="/courses">All courses</Link><br/>
        {/* save the current path */}
        {/* {pathSplitArray.length == 5 ? this.setState({currentCourse: pathSplitArray[4]}) : true }
        {pathSplitArray.length == 6 ? this.setState({currentUnit: pathSplitArray[5]}) : true }
        {pathSplitArray.length == 7 ? this.setState({currentTopic: pathSplitArray[6]}) : true } */}

        {/* display links up to appropriate sublevel */}
        {/* {pathSplitArray.length > 4 ? 
        <Link className="sidebarLink" to={pathSplitArray[4]}>Current course</Link> : <span></span>
        } */}

        {/* <hr/> */}
      </div>
    );
  }
}

// http://localhost:3000/courses
// http://localhost:3000/courses/5b4f7dd06b306f23e4e653aa
// http://localhost:3000/courses/units/5b4f7dd06b306f23e4e653a5
// http://localhost:3000/courses/units/topics/lecture/5b4f7dcf6b306f23e4e65396

