import React, { Component } from 'react';
import Markdown from 'react-markdown';
import { Route, Link, Switch } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Home from './Home';
import Secret from './Secret';
import Login from './Login';
import Signup from './Signup';
import Courses from './Courses';
import Units from './Units';
import Topics from './Topics';
import Exercises from './Exercises';
import Lecture from './Lecture';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';
import api from '../api';
import logo from '../logo.svg';
import './App.css';


class noUser extends React.Component {
  render() {
    return (
      <div>
        <p>Login to get started!</p>
        <p>Don't have an account yet? Create one by signing up!</p><br/>
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props)
    api.loadUser();
  }
  handleLogoutClick(e) {
    api.logout()
  }
  render() {              
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Our Statistics Study App</h1>
          <Link to="/">Home</Link> 
          <Link to="/courses">Courses</Link> 
          {!api.isLoggedIn() && <Link to="/signup">Signup</Link> }
          {!api.isLoggedIn() && <Link to="/login">Login</Link> }
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link> }
        </header>
      { api.isLoggedIn() ? 
        <div className="mainDiv">
          <div className="subDivLeft">
            <Sidebar user={api.loadUser()}/>
            {/* <Sidebar user={api.isLoggedIn()}/> -> returns true / false*/}
          </div>
          <div className="subDivRight">
            <Switch>
              <Route path="/" exact component={UserProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/courses" exact component={Courses} />
              <Route path="/courses/:courseId" exact component={Units} />
              <Route path="/courses/units/:unitId" exact component={Topics} />
              <Route path="/courses/units/topics/lecture/:topicId" exact component={Lecture} />
              <Route path="/courses/units/topics/:topicId/:type" exact component={Exercises} />
              <Route render={() => <h2>404</h2>} />
            </Switch> 
          </div>
        </div>
      : 
         <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" exact component={noUser} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route render={() => <h2>404</h2>} />
         </Switch>
      }
      </div>
    );
  }
}

export default App;
