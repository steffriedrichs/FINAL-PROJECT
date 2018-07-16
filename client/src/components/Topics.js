import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './Components.css';
import api from '../api';


class OneTopic extends React.Component {
  render() {
    return (
        <div className="oneTopicContainer">
        <Link className="myLink" to={`/courses/units/topics/${this.props.id}`}>{this.props.name}</Link>
        </div>
    );
  }
}

class Topics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myUnit: [],
      loading: true
    }
  }
  componentDidMount(){
    api.getOneCourse(this.props.match.params.unitId)
    .then( currentUnit => {
      this.setState({
       myCourse: currentUnit,
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
        <h1>Units in {this.state.myUnit.name}</h1>
        <div className="aroundAllContainer">
        {this.state.myCourse._topics.map( (topic, index) => {
          return (
          <div className="oneTopicContainer"> 
          <OneTopic 
            key={index}
            name={topic.name} 
            id={topic._id} 
          >
          </OneTopic>
          </div>  
          )
        })}
        </div>
      </div>
    );
  }
}

export default Topics;