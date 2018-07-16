import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './Components.css';
import api from '../api';


class OneUnit extends React.Component {
  render() {
    return (
        <div className="oneUnitContainer">
        <Link className="myLink" to={`/courses/units/${this.props.id}`}>{this.props.name}</Link>
        </div>
    );
  }
}

class Units extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myCourse: [],
      loading: true
    }
  }
  componentDidMount(){
    api.getOneCourse(this.props.match.params.courseId)
    .then( currentCourse => {
      console.log("getting the current course!!", currentCourse);
      this.setState({
       myCourse: currentCourse ,
       loading: false
      })
    })
    .catch(err => {throw err})
  }
  render() {
    if (this.state.loading)
      return "Loading..."
    return (
      <div>
        <h1>Units in {this.state.myCourse.name}</h1>
        <div className="aroundAllContainer">
        {this.state.myCourse._units.map( (unit, index) => {
          return (
          <div className="oneUnitContainer"> 
          <OneUnit 
            key={index}
            name={unit.name} 
            id={unit._id} 
          >
          </OneUnit>
          </div>  
          )
        })}
        </div>
      </div>
    );
  }
}

export default Units;