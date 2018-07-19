import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Components.css';
import api from '../api';
import MathJax from '@matejmazur/react-mathjax';


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
      <div className="lectureDiv">
        <br/>
        <h1 className="lectureHeading">{this.state.myTopic.name}</h1>
        {/* allow for more flexibility by mapping through an array with text and formulas */}
        {this.state.myTopic.lectureElements.map( (element, index) => {
          return (
            element.isText ? <p key={index} className="lectureText">{element.element}</p>: 
            <MathJax.Context key={index} input='tex'><MathJax.Node>{element.element}</MathJax.Node></MathJax.Context>
          )
        })}
      </div>
    );
  }
}

export default Lecture;
