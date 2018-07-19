import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './Components.css';
import api from '../api';
import Units from './Units';
// import {  Router, Switch, NavLink } from 'react-router-dom';
// import api from '../api';

// display a div with link to single course:
class OneCourse extends React.Component {
  render() {
    return (
        <div className="oneCourseContainer">
        <Link className="myLink" to={`/courses/${this.props.id}`}>{this.props.name}</Link>
        </div>
    );
  }
}

// create the coures div for all courses (of a user)
class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
  }
  componentDidMount(){
    api.getCourses()
    .then( response => {
      this.setState({
       courses: response 
      })
    })
    .catch(err => {throw err})
  } 
  render() {              
    return (
      <div>
        <h1>All Courses</h1>
        <div className="aroundAllContainer">
        {this.state.courses.map( (course, index) => {
          return (
          <OneCourse 
            key={index}
            name={course.name} 
            id={course._id} 
          >
          </OneCourse>  
          )
        })}
        </div>
      </div>
    );
  }
}


export default Courses;
