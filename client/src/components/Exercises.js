import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Components.css';
import api from '../api';


class OneExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      displaySolution: false
    }
    this.submitSolution = this.handleEventSubmitSolution.bind(this);
    this.showSolution   = this.handleEventShowSolution.bind(this);
  }
  handleEventSubmitSolution(event){
    event.preventDefault();
    this.setState({
      // answer: event.target.value      
      answer: "17"
    }) 
    console.log("BBBBBBBBBBBBb",this.state.answer);
  }
  handleEventShowSolution(event){
    event.preventDefault();
    this.setState({
      displaySolution: true
    })
  }
  render() {
    return (
        <div className="oneExerciseContainer">
          <h2>{this.props.name}</h2>
          <br/>
          <p>{this.props.question}</p>
          <br/>
          <form>
            Your Answer: <input type="text" name="answer"/> <br/><br/>
            <button className="mySubmitButton" onClick={(e) => this.submitSolution(e)}>Submit</button>
            <button className="mySolutionButton" onClick={(e) => this.showSolution(e)}>Show Solution</button>
          </form>
          {this.state.displaySolution ? <p>{this.props.description}</p> : <span></span>}
        </div>
    );
  }
}

class Exercises extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myTopic: [],
      exercises: [],
      isTest: false,
      loading: true
    }
  }
  componentDidMount(){
    if(this.props.match.params.type=="training"){
      api.getTopicTraining(this.props.match.params.topicId)
      .then( currentTopic => {
        this.setState({
         myTopic: currentTopic,
         exercises: currentTopic._trainingExercises,
         isTest: false,
         loading: false
        })
      })
      .catch(err => {throw err})
    }else{
      api.getTopicTest(this.props.match.params.topicId)
     .then( currentTopic => {
       this.setState({
        myTopic: currentTopic,
        exercises: currentTopic._testExercises,
        isTest: true,
        loading: false
       })
     })
     .catch(err => {throw err})
    }
  }
  render() {
    if (this.state.loading)
      return "Loading..."
    return (
      <div>
        <h1>All Exercises for {this.state.myTopic.name}</h1>
        <div className="aroundAllContainer">
        {this.state.exercises.map( (exercise, index) => {
          return (
          <div className="oneExerciseContainer"> 
          <OneExercise 
            key={index}
            name={exercise.name} 
            question={exercise.question} 
            solution={exercise.solution}
            description={exercise.description}
            points={exercise.points} 
            id={exercise._id} 
          >
          </OneExercise>
          </div>  
          )
        })}
        </div>
      </div>
    );
  }
}

export default Exercises;