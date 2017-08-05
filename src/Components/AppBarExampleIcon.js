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
import { ref } from '../config/constants'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Login from './Login'
import * as firebase from 'firebase';

const iconStyles = {
  marginRight: 24,
  fontSize: 24
};
const fixedBar = {
  position: "fixed",
};


export default class AppBarExampleIcon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      authed: true,
      loading: true,
      userName: "",
      photoUrl: "",
      events: null
    };
  }
  componentWillMount() {
    console.log("Mounting")
    firebaseAuth().onAuthStateChanged((user) => {
      console.log(user.photoURL)
      if (user) {
        this.setState({
          userName: user.displayName,
          photoUrl: user.photoURL,
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          userName: "",
          photoUrl: "",
          authed: false,
          loading: false
        })
      }
    });

 var _this = this
    this.ref = ref.child("/events")
    // this.ref.on("child_added", function (dataSnapshot) {
    //   this.items.push(dataSnapshot.val());

    //   this.setState({
    //     events: this.items
    //   });
    //   console.log(this.items);

    // }.bind(this));
    this.ref.once('value', function (snapshot) {
      var items = [];
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        items.push(childData);
        // ...
      });

      _this.setState({
        events:items
      });
    });
  }


  componentWillUnmount() {
    this.ref.off();
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  handlesignOut = () => {

    firebase.auth().signOut().then(function () {

      console.log('Signed Out');

    }, function (error) {
      console.error('Sign Out Error', error);
    })

    this.setState({ authed: false });
  }


  render() {
    return (

      <Router>
        <div>
          {this.state.authed ?
            (<div>
              <AppBar
                title="EventInsta"
                style={fixedBar}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.handleToggle}
              />
              <Drawer
                docked={false}
                width={260}
                open={this.state.open}
                onRequestChange={(open) => this.setState({ open })} >

                <AppBar title="" iconElementLeft={<IconButton><NavigationClose /></IconButton>} onLeftIconButtonTouchTap={this.handleClose} />
                <Divider />
                <MenuItem onTouchTap={this.handleClose}>
                  <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar src={this.state.photoUrl} />
                    }>{this.state.userName}
                  </ListItem>
                  <Divider />
                </MenuItem>
                <MenuItem onTouchTap={this.handleClose}><MdEvent style={iconStyles} /><Link to="/home">Latest Events</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><MdLabel style={iconStyles} /><Link to="/Tags">Societies Tags</Link></MenuItem>
                <MenuItem onTouchTap={this.handlesignOut}><MdExitToApp style={iconStyles} /><Link to="/">Logout</Link></MenuItem>
              </Drawer>

            </div>

            )
            : (<Redirect to="/" />)
          }

          <div>
            <Route path="/Tags" component={TagsPage} />
            <Route path='/home' component={LatestEvents} />
            <Route exact path='/' component={Login} />
          </div>

        </div>

      </Router>

    );
  }
}