import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Components.css';
import api from '../api';


class OneTopic extends React.Component {
  render() {
    return (
        <div className="oneTopicContainer">
          <Link className="myLink" to={`/courses/units/topics/lecture/${this.props.id}`}>{this.props.name}</Link><br/><br/>
          <Link className="myLink" to={`/courses/units/topics/${this.props.id}/training`}>Training</Link>
          <Link className="myLink" to={`/courses/units/topics/${this.props.id}/test`}>Test</Link>
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
    api.getOneUnit(this.props.match.params.unitId)
    .then( currentUnit => {
      this.setState({
       myUnit: currentUnit,
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
        <h1>All Topics in {this.state.myUnit.name}</h1>
        <div className="aroundAllContainer">
        {this.state.myUnit._topics.map( (topic, index) => {
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