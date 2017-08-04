import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import MdLabel from 'react-icons/lib/md/label'
import MdExitToApp from 'react-icons/lib/md/exit-to-app'
import MdEvent from 'react-icons/lib/md/event'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import LatestEvents from './LatestEvents'
import TagsPage from './TagsPage'
import { firebaseAuth } from '../config/constants'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import * as firebase from 'firebase';

const iconStyles = {
  marginRight: 24,
  fontSize: 24
};
const fixedBar = {
  position: "fixed",
};

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/new', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}
export default class AppBarExampleIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      authed: false,
      loading: true,
      eventName:'Event Name',
      eventDescription:'Event Description here' 
    };
  }
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }
  componentDidMount(){
    const rootRef=firebase.database().ref().child('pwa');
    const speedRef=rootRef.child('random-key');
    speedRef.on('value',snap=>{
      this.setState({
        eventName:snap.val().name,
        eventDescription:snap.val().description
      })
    })


  }
  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          title="EventInsta"
          style={fixedBar}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Router>
          <div>
            <Drawer
              docked={false}
              width={260}
              open={this.state.open}
              onRequestChange={(open) => this.setState({ open })}
            >

              <AppBar title="" iconElementLeft={<IconButton><NavigationClose /></IconButton>} onLeftIconButtonTouchTap={this.handleClose} />
              <Divider />
              <MenuItem onTouchTap={this.handleClose}>
                <ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src="images/avatar.jpg" />
                  }>Aniket965
            </ListItem>
                <Divider />
              </MenuItem>

              <MenuItem onTouchTap={this.handleClose}><MdEvent style={iconStyles} /><Link to="/">Latest Events</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}> <MdLabel style={iconStyles} /><Link to="/Tags">Societies Tags</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><MdExitToApp style={iconStyles} /><Link to="/Logout">Logout</Link></MenuItem>


            </Drawer>
            <Route exact path="/new" component={Login} />
            <Route path="/Tags" component={TagsPage} />
            <PublicRoute authed={this.state.authed} path='/login' component={Login} />
            <PublicRoute authed={this.state.authed} path='/register' component={Register} />
            <PrivateRoute authed={this.state.authed} path='/new' component={LatestEvents} />
            <Route render={() => <h3>No Match</h3>} />
          </div>
        </Router>
      </div>
    );
  }
}