import React, { Component } from 'react';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Login from './Components/Login'
import Home from './Components/Home'



class App extends Component {
  constructor(props) {
    super(props);
    // we can change this after we decide on the structure of database 
    this.state = {};
  }


  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      
      </div>
      </Router>
    );
  }

}



export default App;
