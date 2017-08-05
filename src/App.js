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
  // AppBarExample Component which will then fill in the details and render
  // get the number of event from firebase and pass the event ID as prop to 
  componentDidMount() { 
    const rootRef = firebase.database().ref().child('pwa');
    const speedRef = rootRef.child('random-key');
    speedRef.on('value', snap => {
      this.setState({
      })
    })

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
