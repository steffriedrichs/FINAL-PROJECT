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
      <div>
        <br/>
        <h1 className="lectureHeading">{this.state.myTopic.name}</h1>
        {/* allow for several paragraphs by mapping through text array: */}
        {this.state.myTopic.lecture.texts.map( (text, index) => {
          return (
            <p key={index} className="lectureText">{text}</p> 
          )
        })}
        {/* <p className="lectureText">{this.state.myTopic.lecture.text}</p> */}
        <MathJax.Context input='tex'>
          <MathJax.Node>{this.state.myTopic.lecture.formula}</MathJax.Node>
        </MathJax.Context> 
        <p className="lectureText">{this.state.myTopic.lecture.exampleText}</p>
        <MathJax.Context input='tex'>
          <MathJax.Node>{this.state.myTopic.lecture.exampleFormula}</MathJax.Node>
        </MathJax.Context>
        <p className="lectureText">{this.state.myTopic.lecture.finalText}</p>
      </div>
    );
  }
}

export default Lecture;
