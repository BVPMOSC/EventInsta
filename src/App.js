import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Redirect, Switch } from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'
import { firebaseAuth } from './config/constants'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {authed:true};
    // we can change this after we decide on the structure of database 
    firebaseAuth().onAuthStateChanged((user) => {
      // console.log(user.photoURL)
      if (user) {
        this.setState( { authed: true })
      }
      else {
        this.setState( { authed: false })
      }

    });

  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.state.authed ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
          )
      )} />
    )
    return (


      <Router>
        <div>
          <Switch>
           
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/Tags" component={Home}  />
          </Switch>
        </div>
      </Router>

    );
  }

}



export default App;
