import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Markdown from 'react-markdown';
import './Components.css';
import api from '../api';


class Lecture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myTopic: [],
      loading: true
    }
  }
  componentDidMount(){
    api.getOneTopic(this.props.match.params.topicId)
    .then( currentTopic => {
      this.setState({
       myTopic: currentTopic,
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
        <h1>{this.state.myTopic.name}</h1>
        <p><Markdown>{this.state.myTopic.lecture}</Markdown></p>
      </div>
    );
  }
}

export default Lecture;